require 'rails_helper'

RSpec.describe LessonVersion, type: :model do
  subject(:lesson_version) { create :lesson_version }

  it 'has a creator' do
    expect(subject.creator).to be_present
  end

  context "validations" do
    it 'fails validation without a creator' do
      lesson_version = build(:lesson_version, creator: nil)

      expect(lesson_version).not_to be_valid
    end

    it 'fails validation without a media_type' do
      lesson_version = build(:lesson_version, media_type: nil)

      expect(lesson_version).not_to be_valid
    end

    it 'fails validation without a name' do
      lesson_version = build(:lesson_version, name: nil)

      expect(lesson_version).not_to be_valid
    end

    it 'fails validation without a description' do
      lesson_version = build(:lesson_version, description: nil)

      expect(lesson_version).not_to be_valid
    end
  end
end
