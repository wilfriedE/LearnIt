require 'rails_helper'

RSpec.describe CollectionsHelper, type: :helper do
  describe '#collectible_h_path' do
    let(:lesson) { create(:lesson) }
    let(:lesson_version) { create(:lesson_version) }
    let(:collection) { create(:collection) }

    it 'returns lesson path' do
      expect(helper.collectible_h_path(lesson)).to eq(lesson_path(lesson))
    end

    it 'returns lesson_version path' do
      expect(helper.collectible_h_path(lesson_version)).to eq(lesson_version_path(lesson_version))
    end

    it 'returns collection path' do
      expect(helper.collectible_h_path(collection)).to eq(collection_path(collection))
    end
  end
end
