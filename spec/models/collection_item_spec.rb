require 'rails_helper'

RSpec.describe CollectionItem, type: :model do
  subject { create :collection_item }

  it "has a collection" do
    expect(subject.collection).to be_present
  end

  it "has a position" do
    expect(subject.position).to be_present
  end

  it "fails validation without position" do
    collection_item = build(:collection_item, position: nil)
    expect(collection_item).not_to be_valid
  end

  context "collectibles" do
    describe "lesson collection_item" do
      before do
        subject.collectible = create(:lesson)
      end

      it "is a lesson" do
        expect(subject).to be_lesson
        expect(subject).not_to be_lesson_version
        expect(subject).not_to be_collection
      end
    end

    describe "lesson_version collection_item" do
      before do
        subject.collectible = create(:lesson_version)
      end

      it "is a lesson" do
        expect(subject).to be_lesson_version
        expect(subject).not_to be_lesson
        expect(subject).not_to be_collection
      end
    end

    describe "collection collection_item" do
      before do
        subject.collectible = create(:collection)
      end

      it "is a lesson" do
        expect(subject).to be_collection
        expect(subject).not_to be_lesson
        expect(subject).not_to be_lesson_version
      end
    end
  end
end
