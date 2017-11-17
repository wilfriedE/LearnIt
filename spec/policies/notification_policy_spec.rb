require 'rails_helper'

RSpec.describe NotificationPolicy do
  subject { described_class.new(user, notification) }
  let(:user) { create :user }
  let(:notification) { create :notification, recipient: user }

  it 'does not permits show if not recipient' do
    notification.recipient = create :user

    expect(user).to_not eq(notification.recipient)
    is_expected.to forbid_action(:show)
  end

  it 'permits show if recipient' do
    expect(user).to eq(notification.recipient)
    is_expected.to permit_action(:show)
  end
end
