require 'rails_helper'

RSpec.describe AdministratePolicy do
  subject { described_class.new(user, :administrate) }

  let(:user) { create :user }

  context 'being a visitor' do
    let(:user) { nil }
    it { is_expected.to forbid_action(:access) }
  end

  context 'being and admin' do
    before do
      user.make_moderator!
      user.make_editor!
      user.make_admin!
    end

    it { is_expected.to permit_action(:access) }
  end
end
