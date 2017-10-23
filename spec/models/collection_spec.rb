require 'rails_helper'

RSpec.describe Collection, type: :model do
  subject(:collection) { create :collection }

  it 'has a creator' do
    expect(subject.creator).to be_present
  end

  it 'fails validation without a creator' do
    collection = build(:collection, creator: nil)

    expect(collection).not_to be_valid
  end

  it 'fails validation without a name' do
    collection = build(:collection, name: nil)

    expect(collection).not_to be_valid
  end

  it 'fails validation without a description' do
    collection = build(:collection, description: nil)

    expect(collection).not_to be_valid
  end
end
