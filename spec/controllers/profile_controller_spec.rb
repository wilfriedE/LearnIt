require 'rails_helper'

RSpec.describe ProfileController, type: :controller do
  describe "GET #page" do
    context "unauthenticated user" do
      it 'does not show notification' do
        get :page

        expect(response).to redirect_to new_user_session_path
      end
    end

    context "authenticated user" do
      login_user
      it 'shows current user profile' do
        get :page

        expect(response).to render_template("page")
        expect(response).to be_success
      end
    end
  end
end
