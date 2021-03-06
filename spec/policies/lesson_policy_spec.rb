require 'rails_helper'

RSpec.describe LessonPolicy do
  subject { described_class.new(user, lesson) }
  let(:lesson_version) { create :lesson_version }
  let(:lesson) { create :lesson, active_version: lesson_version }
  let(:user) { create :user }

  after(:each) do
    RoleUser.delete_all
  end

  context "visitor" do
    context "unapproved lesson" do
      it { is_expected.to forbid_action(:show) }
    end

    context "approved lesson" do
      before do
        lesson_version.approved!
      end

      it { is_expected.to permit_action(:show) }
    end

    it { is_expected.to forbid_actions([:create, :update, :destroy, :moderate]) }
  end

  context "contributor" do
    before do
      user.make_contributor!
    end

    it { is_expected.to permit_action(:create) }

    context "lesson awaiting approval" do
      context "other contributed" do
        it { is_expected.to forbid_actions([:show, :update, :destroy, :moderate]) }
      end

      context "self contributed" do
        before do
          lesson_version.creator = user
        end

        it { is_expected.to permit_actions([:show, :update, :destroy]) }
        it { is_expected.to forbid_action(:moderate) }
      end
    end

    context "approved lesson" do
      before do
        lesson_version.approved!
      end

      it { is_expected.to permit_action(:show) }
      it { is_expected.to forbid_actions([:update, :destroy]) }
    end
  end

  context "moderator" do
    before do
      user.make_moderator!
    end

    it { is_expected.to permit_actions([:show, :create, :update, :destroy, :moderate]) }
  end

  context "admin" do
    before do
      user.make_admin!
    end

    it { is_expected.to permit_actions([:show, :create, :update, :destroy, :moderate]) }
  end
end
