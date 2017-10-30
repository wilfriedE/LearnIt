require 'rails_helper'

RSpec.describe Lesson, type: :model do
  subject(:lesson) { create :lesson }

  it 'has an active_version' do
    expect(subject.active_version).to be_present
  end

  it 'fails validation without a active_version' do
    lesson = build(:lesson, active_version: nil)

    expect(lesson).not_to be_valid
  end
end
