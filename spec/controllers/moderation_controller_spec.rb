require 'rails_helper'

RSpec.describe ModerationController, type: :controller do
  describe "GET #index" do
    context "unauthenticated users" do
      it 'respons with not found' do
        expect { get :index }.to raise_error(ActionController::RoutingError)
      end
    end

    context "unauthorized users" do
      login_user

      it 'respons with not found if visitor' do
        expect { get :index }.to raise_error(ActionController::RoutingError)
      end

      it 'respons with not found if contributor' do
        user.make_contributor!
        expect { get :index }.to raise_error(ActionController::RoutingError)
      end

      it 'respons with not found if editor' do
        user.make_editor!
        expect { get :index }.to raise_error(ActionController::RoutingError)
      end
    end

    context "authorized users" do
      login_user

      it 'allows moderation if moderator' do
        user.make_moderator!
        get :index
        expect(response).to be_success
        expect(response).to render_template("index")
      end

      it 'allows moderation if admin' do
        user.make_admin!
        get :index
        expect(response).to be_success
        expect(response).to render_template("index")
      end
    end

    context "with query" do
      login_moderator

      it 'respondes to active page' do
        get :index, params: { q: { collection_name_cont: "learn" }, active: :new_collections }

        expect(response).to be_success
        expect(response).to render_template("index")
      end
    end
  end
end
