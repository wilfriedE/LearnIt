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
        expect(response).to be_success
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
        expect(response).to be_success
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
        expect(response).to be_success
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows pages' do
        get :pages
        expect(response).to be_success
      end
    end
  end
end
