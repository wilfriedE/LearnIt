require 'rails_helper'

RSpec.describe CollectionItem, type: :model do
  subject { create :collection_item }

  it "has a collection" do
    expect(subject.collection).to be_present
  end
end
