require 'rails_helper'

RSpec.describe AdministratePolicy do
  let(:user) { create :user }

  subject { described_class.new(user, :administrate) }

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
