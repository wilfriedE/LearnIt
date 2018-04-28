require 'rails_helper'

RSpec.describe LessonsController, type: :controller do
  let(:lesson) { create :lesson }

  describe "GET #index" do
    it 'shows lessons' do
      get :index

      expect(response).to be_successful
    end

    it 'shows lessons when searching' do
      get :index, params: { q: { active_version_name_cont: "Learn Stuff" } }

      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    context "unapproved lesson" do
      it '404s' do
        get :show, params: { id: lesson.id }

        expect(response).to redirect_to root_url
      end
    end

    context "approved lesson" do
      before do
        lesson.active_version.approved!
      end

      it 'shows lesson page' do
        get :show, params: { id: lesson.id }

        expect(response).to be_successful
      end
    end
  end

  describe "GET #new" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :new

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        get :new

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'shows new page' do
        get :new

        expect(response).to be_successful
      end
    end
  end

  describe "GET #propose_update" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :propose_update, params: { id: lesson.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        get :propose_update, params: { id: lesson.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'shows new page' do
        get :propose_update, params: { id: lesson.id }

        expect(response).to be_successful
        expect(response).to render_template('lesson_versions/new_version_proposal')
      end
    end
  end

  describe "POST #create" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        post :create, params: { lesson_version: attributes_for(:lesson_version) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        post :create, params: { lesson_version: attributes_for(:lesson_version) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "invalid lesson" do
        it 'allows contributor to retry' do
          lesson_version_attributes = attributes_for(:lesson_version, name: nil, media_type: "youtube_video", data: { url: "https://www.youtube.com/watch?v=miomuSGoPzI" })

          post :create, params: { lesson_version: lesson_version_attributes }

          expect(response).to be_successful
          expect(response).to render_template('new')
        end
      end

      context "valid lesson" do
        it 'shows successfuly created lesson' do
          lesson_version_attributes = attributes_for(:lesson_version, media_type: "rich_text", data: { rich_text: "Hello World!!" })

          expect { post :create, params: { lesson_version: lesson_version_attributes } }.to change(Lesson, :count).by(1)
        end
      end
    end
  end

  describe "POST #create_new_version" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        post :create_new_version, params: { id: lesson.id, lesson_version: attributes_for(:lesson_version) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        post :create_new_version, params: { id: lesson.id, lesson_version: attributes_for(:lesson_version) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "invalid lesson version" do
        it 'allows contributor to retry' do
          lesson_version_attributes = attributes_for(:lesson_version, name: nil, media_type: "youtube_video", data: { url: "https://www.youtube.com/watch?v=miomuSGoPzI" })

          post :create_new_version, params: { id: lesson.id, lesson_version: lesson_version_attributes }

          expect(response).to be_successful
          expect(response).to render_template('lesson_versions/new_version_proposal')
        end
      end

      context "valid lesson version" do
        it 'shows successfuly created lesson' do
          lesson_version_attributes = attributes_for(:lesson_version, media_type: "youtube_video", data: { url: "https://www.youtube.com/watch?v=miomuSGoPzI" })

          versions_count = lesson.lesson_versions.count
          post :create_new_version, params: { id: lesson.id, lesson_version: lesson_version_attributes }

          expect(lesson.lesson_versions.count).to be > versions_count
        end
      end
    end
  end

  describe "GET #lesson_approval" do
    let(:row_id) { "table_field_id_#{lesson.id}" }

    context "unauthenticated user" do
      it 'does nothing' do
        put :lesson_approval, xhr: true, format: :js, params: { id: lesson.id, row_id: row_id }

        expect(response).not_to render_template("lesson_approval")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        put :lesson_approval, xhr: true, format: :js, params: { id: lesson.id, row_id: row_id }

        expect(response).not_to render_template("lesson_approval")
      end
    end

    context "authenticated contributor" do
      login_contributor

      before do
        lesson.active_version.update(creator: user)
      end

      it 'does nothing' do
        put :lesson_approval, xhr: true, format: :js, params: { id: lesson.id, row_id: row_id }

        expect(response).not_to render_template("lesson_approval")
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'handles lesson approval' do
        put :lesson_approval, xhr: true, format: :js, params: { id: lesson.id, row_id: row_id, approval: "approved" }

        lesson.reload
        expect(lesson.active_version).to be_approved
        expect(response).to render_template("lesson_approval")
      end
    end
  end

  describe "DELETE #destroy" do
    context "unauthenticated user" do
      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "other contributed" do
        it 'do nothing' do
          delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

          expect(response).not_to render_template("destroy")
        end
      end

      context "self contributed" do
        before do
          lesson.active_version.update(creator: user)
        end

        it 'allows delete if not approved' do
          delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

          expect(response).to render_template("destroy")
        end

        it 'does not allow delete if approved' do
          lesson.active_version.approved!

          delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

          expect(response).not_to render_template("destroy")
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'allows delete' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson.id }

        expect(response).to render_template("destroy")
      end
    end
  end
end
