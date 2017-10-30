require 'rails_helper'

RSpec.describe PagePolicy do
  subject { described_class.new(user, page) }

  let(:page) { create :page }

  let(:user) { create :user }

  context "visitor" do
    it { is_expected.to forbid_actions([:create, :update, :destroy]) }
  end

  context "contributor" do
    before do
      user.make_contributor!
    end

    it { is_expected.to forbid_actions([:create, :update, :destroy]) }
  end

  context "moderator" do
    before do
      user.make_moderator!
    end

    it { is_expected.to forbid_actions([:create, :update, :destroy]) }
  end

  context "editor" do
    before do
      user.make_editor!
    end

    it { is_expected.to permit_actions([:create, :update, :destroy]) }
  end

  context "administrator" do
    before do
      user.make_admin!
    end

    it { is_expected.to permit_actions([:create, :update, :destroy]) }
  end
end
