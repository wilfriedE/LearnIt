require 'rails_helper'

RSpec.describe AdministratePolicy do
  subject { described_class.new(user, :administrate) }

  before :each do
    @admin_user = create :user
    @admin_user.make_moderator
    @admin_user.make_editor
    @admin_user.make_admin
  end

  context 'being a visitor' do
    let(:user) { nil }
    it { is_expected.to forbid_action(:access) }
  end

  context 'being and admin' do
    let(:user) { @admin_user }
    it { is_expected.to permit_action(:access)}
  end
end
