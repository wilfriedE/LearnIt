require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { create :user }

  it "all visitors by default" do
    expect(subject).to be_visitor
  end

  it "can be banned" do
    banned_user = create :user
    banned_user.ban!

    expect(banned_user).to be_banned
  end

  it "can be a contributor" do
    subject.make_contributor!
    user2 = create :user
    user2.make_contributor!

    expect(subject).to be_contributor
    expect(user2).to be_contributor
  end

  it "can be a moderator" do
    subject.make_moderator!
    user2 = create :user
    user2.make_moderator!

    expect(subject).to be_moderator
    expect(user2).to be_moderator
  end

  it "can be an admin" do
    subject.make_admin!
    user2 = create :user
    user2.make_admin!

    expect(subject).to be_admin
    expect(user2).to be_admin
  end

  it "can have multiple roles" do
    subject.make_contributor!
    subject.make_moderator!
    subject.make_editor!
    subject.make_admin!

    expect(subject).to be_contributor
    expect(subject).to be_editor
    expect(subject).to be_moderator
    expect(subject).to be_admin
  end

  describe "#new_notifications?" do
    it 'has notification if one is unread' do
      create :notification, recipient: user
      expect(user.new_notifications?).to be_truthy
    end
  end

  describe "#latest_notifications" do
    let(:notification) { create :notification, recipient: user }

    before(:each) do
      create(:notification, recipient: user).seen!
      create(:notification, recipient: user).read!
      create(:notification, recipient: user).read!
    end

    after(:each) do
      Notification.destroy_all
    end

    it 'returns latest notifications' do
      expect(notification.recipient).to eq(user)
      expect(user.latest_notifications).to include(notification)
    end

    it 'shows unread notification at top of latest notifications' do
      expect(notification).to be_unread
      expect(user.latest_notifications.first).to eq(notification)
    end

    it 'does not show read notitifications at top of latest notifications' do
      notification.read!

      expect(notification).to be_read
      expect(user.latest_notifications.first).not_to eq(notification)
    end
  end
end
