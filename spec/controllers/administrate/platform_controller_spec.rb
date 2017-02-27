require 'rails_helper'

RSpec.describe Administrate::PlatformController, type: :controller do

  describe "GET #index" do
    context 'as visitor' do
      it "returns http redirect" do
        get :index
        expect(response).to have_http_status(:redirect)
      end
    end

    context 'as regular user' do
      login_user

      it "returns http redirect" do
        get :index
        expect(controller.current_user).not_to be(nil)
        expect(response).to have_http_status(:redirect)
      end
    end

    context 'as moderator' do
      login_moderator

      it "returns http redirect" do
        get :index
        expect(controller.current_user).not_to be(nil)
        expect(controller.current_user).to be_moderator
        expect(response).to have_http_status(:redirect)
      end
    end

    context 'as admin' do
      login_admin

      it "returns http success" do
        get :index
        expect(controller.current_user).not_to be(nil)
        expect(controller.current_user).to be_admin
        expect(response).to have_http_status(:success)
      end
    end
  end

end
