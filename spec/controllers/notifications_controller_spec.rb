require 'rails_helper'

RSpec.describe NotificationsController, type: :controller do
  let(:user) { create :user }
  let(:notification) { create :notification, recipient: user }

  describe "GET #index" do
    context "unauthenticated user" do
      it 'does not shows notifications' do
        expect { get :index }.to raise_error(ActionController::RoutingError)
      end

      it 'does not loads latest_notifications for ajax requests' do
        expect { get :index, xhr: true }.to raise_error(ActionController::RoutingError)
      end
    end

    context "authenticated user" do
      login_user

      before do
        notification.recipient = user
      end

      it 'shows notifications' do
        get :index

        expect(response).to render_template("index")
        expect(response).to be_success
      end

      it 'loads latest_notifications for ajax requests' do
        get :index, xhr: true

        expect(response).to render_template("index")
      end
    end
  end

  describe "GET #show" do
    context "unauthenticated user" do
      it 'does not show notification' do
        get :show, params: { id: notification.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated user" do
      login_user
      let(:lesson) { create :lesson }

      before do
        notification.recipient = user
        notification.source = lesson_url(lesson)
        notification.save
      end

      it 'shows redirects root if notification source is nil' do
        notification = create(:notification, recipient: user)

        get :show, params: { id: notification.id }
        expect(response).to redirect_to root_url
      end

      it 'shows redirects to notification source' do
        get :show, params: { id: notification.id }
        expect(response).to redirect_to notification.source
      end
    end
  end
end
