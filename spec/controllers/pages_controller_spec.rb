require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  let(:page) {  create(:page, name: "a_page") }

  describe "GET #index (HOME)" do
    it 'not found if home page doesn\'t exists' do
      expect { get :index }.to raise_error(ActionController::RoutingError)
    end

    it 'shows home page if available' do
      create(:page, name: "home")
      get :index

      expect(response).to be_success
      expect(response).to render_template("show")
    end
  end

  describe "GET #show" do
    it 'not found if page doesn\'t exists' do
      expect { get :show, params: { name: "learn" } }.to raise_error(ActionController::RoutingError)
    end

    it 'shows page if available' do
      create(:page, name: "learn")
      get :show, params: { name: "learn" }

      expect(response).to be_success
      expect(response).to render_template("show")
    end
  end

  describe "GET #library" do
    it 'shows library' do
      get :library, params: { name: "learn" }

      expect(response).to be_success
      expect(response).to render_template("library")
    end
  end

  describe "GET #new" do
    context "unauthenticated users" do
      it 'redirects to home' do
        get :new, xhr: true
        expect(response).to redirect_to root_url
      end
    end

    context "unauthorized users" do
      login_user

      it 'redirects to home if visitor' do
        get :new, xhr: true
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if contributor' do
        user.make_contributor!
        get :new, xhr: true
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if moderator' do
        user.make_moderator!
        get :new, xhr: true
        expect(response).to redirect_to root_url
      end
    end

    context "authorized users" do
      login_user

      it 'allows new page creation if editor' do
        user.make_editor!
        get :new, xhr: true
        expect(response).to be_success
        expect(response).to render_template("new")
      end

      it 'allows new page creation if admin' do
        user.make_admin!
        get :new, xhr: true
        expect(response).to be_success
        expect(response).to render_template("new")
      end
    end
  end

  describe "GET #edit" do
    context "unauthenticated users" do
      it 'redirects to home' do
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to redirect_to root_url
      end
    end

    context "unauthorized users" do
      login_user

      it 'redirects to home if visitor' do
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if contributor' do
        user.make_contributor!
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if moderator' do
        user.make_moderator!
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to redirect_to root_url
      end
    end

    context "authorized users" do
      login_user

      it 'allows page modification if editor' do
        user.make_editor!
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to be_success
        expect(response).to render_template("edit")
      end

      it 'allows page modification if admin' do
        user.make_admin!
        get :edit, xhr: true, params: { name: page.name }
        expect(response).to be_success
        expect(response).to render_template("edit")
      end
    end
  end

  describe "GET #edit_wysiwyg" do
    context "unauthenticated users" do
      it 'redirects to home' do
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to redirect_to root_url
      end
    end

    context "unauthorized users" do
      login_user

      it 'redirects to home if visitor' do
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if contributor' do
        user.make_contributor!
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to redirect_to root_url
      end

      it 'redirects to home if moderator' do
        user.make_moderator!
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to redirect_to root_url
      end
    end

    context "authorized users" do
      login_user

      it 'allows page modification if editor' do
        user.make_editor!
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to be_success
        expect(response).to render_template("edit_wysiwyg")
      end

      it 'allows page modification if admin' do
        user.make_admin!
        get :edit_wysiwyg, params: { name: page.name }
        expect(response).to be_success
        expect(response).to render_template("edit_wysiwyg")
      end
    end
  end

  describe "POST #create" do
    context "unauthenticated users" do
      it 'does nothing' do
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).not_to render_template("create")
      end
    end

    context "unauthorized users" do
      login_user

      it 'does nothing if visitor' do
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).not_to render_template("create")
      end

      it 'does nothing if contributor' do
        user.make_contributor!
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).not_to render_template("create")
      end

      it 'does nothing if moderator' do
        user.make_moderator!
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).not_to render_template("create")
      end
    end

    context "authorized users" do
      login_user

      it 'allows page creation if editor' do
        user.make_editor!
        page_count = Page.all.count
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).to render_template("create")
        expect(page_count).to be < Page.all.count
      end

      it 'allows page modification if admin' do
        user.make_admin!
        page_count = Page.all.count
        post :create, xhr: true, params: { page: attributes_for(:page) }
        expect(response).to render_template("create")
        expect(page_count).to be < Page.all.count
      end
    end
  end

  describe "PUT #update" do
    context "unauthenticated users" do
      it 'does nothing' do
        put :update, xhr: true, params: { name: page.name, page: page.attributes, form_id: "page_form_#{page.id}" }
        expect(response).not_to render_template("update")
      end
    end

    context "unauthorized users" do
      login_user

      it 'does nothing if visitor' do
        put :update, xhr: true, params: { name: page.name, page: page.attributes, form_id: "page_form_#{page.id}" }
        expect(response).not_to render_template("update")
      end

      it 'does nothing if contributor' do
        user.make_contributor!
        put :update, xhr: true, params: { name: page.name, page: page.attributes, form_id: "page_form_#{page.id}" }
        expect(response).not_to render_template("update")
      end

      it 'does nothing if moderator' do
        user.make_moderator!
        put :update, xhr: true, params: { name: page.name, page: page.attributes, form_id: "page_form_#{page.id}" }
        expect(response).not_to render_template("update")
      end
    end

    context "authorized users" do
      login_user

      context "regular update" do
        it 'allows page update if editor' do
          user.make_editor!
          put :update, xhr: true, params: { name: page.name, page: page.attributes.update(name: "learnit"), form_id: "page_form_#{page.id}" }

          page.reload
          expect(page.name).to eq("learnit")
          expect(response).to render_template("update")
        end

        it 'allows page update if admin' do
          user.make_admin!
          put :update, xhr: true, params: { name: page.name, page: page.attributes.update(name: "learnit"), form_id: "page_form_#{page.id}" }

          page.reload
          expect(page.name).to eq("learnit")
          expect(response).to render_template("update")
        end
      end

      context "wysiwyg update" do
        let(:page_body_html) do
          "Hello world <h1>LearnIt</h1>"
        end

        it 'allows page update if editor' do
          user.make_editor!
          put :update, xhr: true, params: { name: page.name, "page-body": page_body_html, form_id: "page_form_#{page.id}" }

          page.reload
          expect(page.body).to eq(page_body_html)
          expect(response).to render_template("update")
        end

        it 'allows page update if admin' do
          user.make_admin!
          put :update, xhr: true, params: { name: page.name, "page-body": page_body_html, form_id: "page_form_#{page.id}" }

          page.reload
          expect(page.body).to eq(page_body_html)
          expect(response).to render_template("update")
        end
      end
    end
  end

  describe "DELETE #destroy" do
    context "unauthenticated users" do
      it 'does nothing' do
        delete :destroy, xhr: true, params: { name: page.name }
        expect(response).not_to render_template("destroy")
      end
    end

    context "unauthorized users" do
      login_user

      it 'does nothing if visitor' do
        delete :destroy, xhr: true, params: { name: page.name }
        expect(response).not_to render_template("destroy")
      end

      it 'does nothing if contributor' do
        user.make_contributor!
        delete :destroy, xhr: true, params: { name: page.name }
        expect(response).not_to render_template("destroy")
      end

      it 'does nothing if moderator' do
        user.make_moderator!
        delete :destroy, xhr: true, params: { name: page.name }
        expect(response).not_to render_template("destroy")
      end
    end

    context "authorized users" do
      login_user

      it 'allows page deletion if editor' do
        user.make_editor!
        delete :destroy, xhr: true, params: { name: page.name }

        expect { page.reload }.to raise_error ActiveRecord::RecordNotFound
        expect(response).to render_template("destroy")
      end

      it 'allows page deletion if admin' do
        user.make_admin!
        delete :destroy, xhr: true, params: { name: page.name }

        expect { page.reload }.to raise_error ActiveRecord::RecordNotFound
        expect(response).to render_template("destroy")
      end
    end
  end
end
