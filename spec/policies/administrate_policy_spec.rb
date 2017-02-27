require 'rails_helper'

RSpec.describe AdministratePolicy do
  subject { described_class.new(user, :administrate) }

  context 'being a visitor' do
    let(:user) { nil }
    it { is_expected.to forbid_action(:access) }
  end

  context 'being and admin' do
    let(:user) { create :user, :admin }
    it { is_expected.to permit_action(:access)}
  end
end
