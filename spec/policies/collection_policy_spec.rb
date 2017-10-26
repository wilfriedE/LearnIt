require 'rails_helper'

RSpec.describe CollectionPolicy do
  subject { described_class.new(user, collection) }
  let(:collection) { create :collection }
  let(:user) { create :user }

  after(:each) do
    RoleUser.delete_all
  end

  context "visitor" do
    context "unapproved collection" do
      it { is_expected.to forbid_action(:show) }
    end

    context "approved collection" do
      let(:collection) { create :collection, approval: :approved }

      it { is_expected.to permit_action(:show) }
    end

    it { is_expected.to forbid_actions([:create, :update, :destroy]) }
  end

  context "contributor" do
    before do
      user.make_contributor!
    end

    it { is_expected.to permit_action(:create) }

    context "collection awaiting approval" do
      context "other contributed" do
        it { is_expected.to forbid_actions([:show, :update, :destroy]) }
      end

      context "self contributed" do
        let(:collection) { create :collection, creator: user }

        it { is_expected.to permit_actions([:show, :update, :destroy]) }
      end
    end

    context "approved collection" do
      let(:collection) { create :collection, approval: :approved }

      it { is_expected.to permit_action(:show) }
      it { is_expected.to forbid_actions([:update, :destroy]) }
    end
  end

  context "moderator" do
    before do
      user.make_moderator!
    end

    it { is_expected.to permit_actions([:show, :create, :update, :destroy]) }
  end

  context "admin" do
    before do
      user.make_admin!
    end

    it { is_expected.to permit_actions([:show, :create, :update, :destroy]) }
  end
end
