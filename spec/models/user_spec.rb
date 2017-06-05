require 'rails_helper'

RSpec.describe User, type: :model do
  before :all do
    @editor_role = create(:role, :editor)
    @contributor_role = create(:role, :contributor)
    @moderator_role = create(:role, :moderator)
    @admin_role = create(:role, :admin)
    @user = create :user
  end

  it "all contributors by default" do
    expect(@user).to be_contributor
  end

  it "can be a moderator" do
    @user.make_moderator
    user2 = create :user
    user2.make_moderator

    expect(@user).to be_moderator
    expect(user2).to be_moderator
  end

  it "can be an admin" do
    @user.make_admin
    user2 = create :user
    user2.make_admin

    expect(@user).to be_admin
    expect(user2).to be_admin
  end

  it "can have multiple roles" do
    @user.make_editor

    expect(@user).to be_contributor
    expect(@user).to be_editor
    expect(@user).to be_moderator
    expect(@user).to be_admin
  end
end
