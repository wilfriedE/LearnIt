require 'rails_helper'

RSpec.describe User, type: :model do
  before :all do
    @user = create :user
  end

  it "has role of 'USER' by default" do
    expect(@user.role).to eq('USER')
  end

  it "can be a moderator" do
    user2 = create :user, :moderator
    @user.make_moderator
    expect(user2).to be_moderator
    expect(@user).to be_moderator
  end

  it "can be an admin" do
    user = create :user, :admin
    @user.make_admin
    expect(user).to be_admin
    expect(@user).to be_admin
  end
end
