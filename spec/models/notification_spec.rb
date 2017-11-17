require 'rails_helper'

RSpec.describe Notification, type: :model do
  let(:notification) { create :notification }

  it "fails without name, description, or recipient" do
    expect(notification).to be_valid
    expect(build(:notification, name: nil)).not_to be_valid
    expect(build(:notification, description: nil)).not_to be_valid
    expect(build(:notification, recipient: nil)).not_to be_valid
  end

  it 'is unread by default' do
    expect(notification.unread?).to be_truthy
  end

  it 'changes read_status' do
    notification.seen!
    expect(notification.seen?).to be_truthy

    notification.read!
    expect(notification.read?).to be_truthy
  end
end
