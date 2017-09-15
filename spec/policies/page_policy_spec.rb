require 'rails_helper'

RSpec.describe PagePolicy do
  subject { described_class.new(user, page) }

  let(:page) { create :page }

  let(:user) { create :user }

  context "visitor" do
    let(:user) { nil }
    it { is_expected.to forbid_action(:update) }
    it { is_expected.to forbid_action(:destroy) }
  end

  context "editor" do
    before do
      user.make_editor!
    end

    it { is_expected.to permit_action(:update) }

    it { is_expected.to forbid_action(:destroy) }
  end

  context "administrator" do
    before do
      user.make_admin!
    end

    it { is_expected.to permit_action(:update) }
    it { is_expected.to permit_action(:destroy) }
  end
end
