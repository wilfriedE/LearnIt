require 'rails_helper'

RSpec.describe PlatformController, type: :controller do
  describe "GET #index" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :index
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'redirects visitors to root' do
        get :index
        expect(response).to redirect_to root_url
      end

      it 'redirects contributors to root' do
        user.make_contributor!
        get :index
        expect(response).to redirect_to root_url
      end

      it 'redirects moderators to root' do
        user.make_moderator!
        get :index
        expect(response).to redirect_to root_url
      end

      it 'redirect editors to root' do
        user.make_editor!
        get :index
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows index' do
        get :index
        expect(response).to be_successful
      end
    end
  end

  describe "GET #preferences" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :preferences
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'redirects visitors to root' do
        get :preferences
        expect(response).to redirect_to root_url
      end

      it 'redirects contributors to root' do
        user.make_contributor!
        get :preferences
        expect(response).to redirect_to root_url
      end

      it 'redirects moderators to root' do
        user.make_moderator!
        get :preferences
        expect(response).to redirect_to root_url
      end

      it 'redirect editors to root' do
        user.make_editor!
        get :preferences
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows preferences page' do
        get :preferences
        expect(response).to be_successful
      end
    end
  end

  describe "GET #pages" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :pages
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'redirects visitors to root' do
        get :pages
        expect(response).to redirect_to root_url
      end

      it 'redirects contributors to root' do
        user.make_contributor!
        get :pages
        expect(response).to redirect_to root_url
      end

      it 'redirects moderators to root' do
        user.make_moderator!
        get :pages
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated editor" do
      login_editor

      it 'shows pages' do
        get :pages
        expect(response).to be_successful
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows pages' do
        get :pages
        expect(response).to be_successful
      end
    end
  end

  describe "GET #users" do
    context "unauthenticated user" do
      it 'redirects root' do
        get :users
        expect(response).to redirect_to root_url
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'shows users list' do
        get :users
        expect(response).to be_successful
        expect(response).to render_template("users")
      end
    end
  end

  describe "PUT #make_user_admin" do
    let(:sample_user) { create(:user) }
    context "unauthenticated user" do
      it 'does not assign user admin role' do
        put :make_user_admin, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user.reload).not_to be_admin
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'assigns user admin role' do
        expect(sample_user).not_to be_admin
        put :make_user_admin, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).to be_admin
      end
    end
  end

  describe "PUT #make_user_editor" do
    let(:sample_user) { create(:user) }
    context "unauthenticated user" do
      it 'does not assign user editor role' do
        put :make_user_editor, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user.reload).not_to be_editor
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'assigns user editor role' do
        expect(sample_user).not_to be_editor
        put :make_user_editor, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).to be_editor
      end
    end
  end

  describe "PUT #make_user_moderator" do
    let(:sample_user) { create(:user) }
    context "unauthenticated user" do
      it 'does not assign user moderator role' do
        put :make_user_moderator, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user.reload).not_to be_moderator
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'assigns user moderator role' do
        expect(sample_user).not_to be_moderator
        put :make_user_moderator, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).to be_moderator
      end
    end
  end

  describe "PUT #make_user_contributor" do
    let(:sample_user) { create(:user) }
    context "unauthenticated user" do
      it 'does not assign user contributor role' do
        put :make_user_contributor, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user.reload).not_to be_contributor
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'assigns user contributor role' do
        expect(sample_user).not_to be_contributor
        put :make_user_contributor, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).to be_contributor
      end
    end
  end

  describe "PUT #ban_user" do
    let(:sample_user) { create(:user) }
    context "unauthenticated user" do
      it 'does not ban user' do
        put :ban_user, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user.reload).not_to be_banned
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'bans user' do
        expect(sample_user).not_to be_banned
        put :ban_user, xhr: true, params: { id: sample_user.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).to be_banned
      end
    end
  end

  describe "PUT #remove_user_role" do
    let(:sample_user) { create(:user) }
    let(:moderator_role) { create(:role, :moderator) }

    before do
      sample_user.make_moderator!
    end

    context "unauthenticated user" do
      it 'does not change user role' do
        expect(sample_user).to be_moderator
        put :remove_user_role, xhr: true, params: { id: sample_user.id, role_id: moderator_role.id, row_id: "user_row_#{sample_user.id}" }
        expect(response).not_to render_template("user_role_change")
        expect(sample_user).to be_moderator
      end
    end

    context "authenticated user with permission" do
      login_admin

      it 'removes user role' do
        expect(sample_user).to be_moderator
        put :remove_user_role, xhr: true, params: { id: sample_user.id, role_id: moderator_role.id, row_id: "user_row_#{sample_user.id}" }

        expect(response).to render_template("user_role_change")
        expect(sample_user.reload).not_to be_moderator
      end
    end
  end
end
