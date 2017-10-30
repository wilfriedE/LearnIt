require 'rails_helper'

RSpec.describe LessonVersionsController, type: :controller do
  let(:lesson_version) { create :lesson_version }

  describe "GET #show" do
    context "unapproved lesson_version" do
      it 'redirect to home' do
        get :show, params: { id: lesson_version.id }

        expect(response).to redirect_to root_url
      end
    end

    context "approved lesson_version" do
      before do
        lesson_version.approved!
      end

      it 'shows lesson_version page' do
        get :show, params: { id: lesson_version.id }

        expect(response).to be_success
        expect(response).not_to redirect_to root_url
      end
    end
  end

  describe "GET #lesson_media_field" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :lesson_media_field, xhr: true, params: { lesson_version: lesson_version.attributes }

        expect(response).not_to render_template("lesson_media_field")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        get :lesson_media_field, xhr: true, params: { lesson_version: lesson_version.attributes }

        expect(response).not_to render_template("lesson_media_field")
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'returns media field' do
        get :lesson_media_field, xhr: true, params: { lesson_version: lesson_version.attributes }

        expect(response).to render_template("lesson_media_field")
      end
    end
  end

  describe "GET #edit" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :edit, params: { id: lesson_version.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        get :edit, params: { id: lesson_version.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "unapproved lesson_version" do
        context "other contributed" do
          it 'redirect_to root' do
            get :edit, params: { id: lesson_version.id }

            expect(response).to redirect_to root_url
          end
        end

        context "self contributed" do
          before do
            lesson_version.update(creator: user)
          end

          it 'shows edit page' do
            get :edit, params: { id: lesson_version.id }

            expect(response).not_to redirect_to root_url
            expect(response).to be_success
          end
        end
      end

      context "approved lesson_version" do
        before do
          lesson_version.approved!
        end

        context "other contributed" do
          it 'redirect_to root' do
            get :edit, params: { id: lesson_version.id }

            expect(response).to redirect_to root_url
          end
        end

        context "self contributed" do
          before do
            lesson_version.update(creator: user)
          end

          it 'redirect to home' do
            get :edit, params: { id: lesson_version.id }

            expect(response).to redirect_to root_url
          end
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      context "unapproved lesson_version" do
        it 'shows edit page' do
          get :edit, params: { id: lesson_version.id }
          expect(response).to be_success
        end
      end

      context "approved lesson_version" do
        before do
          lesson_version.approved!
        end

        it 'shows edit page' do
          get :edit, params: { id: lesson_version.id }

          expect(response).not_to redirect_to root_url
          expect(response).to be_success
        end
      end
    end
  end

  describe "PUT #update" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        put :update, params: { id: lesson_version.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        put :update, params: { id: lesson_version.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      let(:lesson_version_attributes) do
        attributes_for(:lesson_version, name: "Learn Stuff").merge(media_type: "youtube_video", data: { url: "https://www.youtube.com/watch?v=miomuSGoPzI" })
      end

      context "other contributed" do
        it 'redirect_to root' do
          put :update, params: { id: lesson_version.id, lesson_version: lesson_version_attributes }

          expect(response).to redirect_to root_url
        end
      end

      context "self contributed" do
        before do
          lesson_version.update(creator: user)
        end

        it 'allows changes if not approved' do
          put :update, params: { id: lesson_version.id, lesson_version: lesson_version_attributes }

          lesson_version.reload
          expect(lesson_version.name).to eq("Learn Stuff")
          expect(response).to redirect_to lesson_version_url(lesson_version)
        end

        it 'allows edit if invalid and not approved' do
          lesson_version_attributes.update(name: nil)
          put :update, params: { id: lesson_version.id, lesson_version: lesson_version_attributes }

          expect(response).to render_template('edit')
        end

        it 'does not allow changes if approved' do
          lesson_version.approved!

          put :update, params: { id: lesson_version.id, lesson_version: lesson_version_attributes }

          expect(response).to redirect_to root_url
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      let(:lesson_version_attributes) do
        attributes_for(:lesson_version).merge(media_type: "youtube_video", data: { url: "https://www.youtube.com/watch?v=miomuSGoPzI" })
      end

      it 'allows changes' do
        put :update, params: { id: lesson_version.id, lesson_version: lesson_version_attributes }

        expect(response).to redirect_to lesson_version_url(lesson_version)
      end
    end
  end

  describe "PUT #lesson_version_approval" do
    let(:row_id) { "table_field_id_#{lesson_version.id}" }
    let(:lesson) { create(:lesson) }

    before do
      lesson.active_version.approved!
      lesson_version.update(lesson: lesson)
    end

    context "unauthenticated user" do
      it 'does nothing' do
        put :lesson_version_approval, xhr: true, format: :js, params: { id: lesson_version.id, row_id: row_id }

        expect(response).not_to render_template("lesson_version_approval")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        put :lesson_version_approval, xhr: true, format: :js, params: { id: lesson_version.id, row_id: row_id }

        expect(response).not_to render_template("lesson_version_approval")
      end
    end

    context "authenticated contributor" do
      login_contributor

      before do
        lesson_version.update(creator: user)
      end

      it 'does nothing' do
        put :lesson_version_approval, xhr: true, format: :js, params: { id: lesson_version.id, row_id: row_id }

        expect(response).not_to render_template("lesson_version_approval")
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'handles lesson_version approval' do
        put :lesson_version_approval, xhr: true, format: :js, params: { id: lesson_version.id, row_id: row_id, approval: "approved" }

        lesson_version.reload
        expect(lesson_version).to be_approved
        expect(response).to render_template("lesson_version_approval")
      end
    end
  end

  describe "DELETE #destroy" do
    context "unauthenticated user" do
      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "other contributed" do
        it 'do nothing' do
          delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

          expect(response).not_to render_template("destroy")
        end
      end

      context "self contributed" do
        before do
          lesson_version.update(creator: user)
        end

        it 'allows delete if not approved' do
          delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

          expect(response).to render_template("destroy")
        end

        it 'does not allow delete if approved' do
          lesson_version.approved!

          delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

          expect(response).not_to render_template("destroy")
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'allows delete' do
        delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

        expect(response).to render_template("destroy")
      end

      it 'allows delete even if approved' do
        lesson_version.approved!

        delete :destroy, xhr: true, format: :js, params: { id: lesson_version.id }

        expect(response).to render_template("destroy")
      end
    end
  end
end
