require 'rails_helper'

RSpec.describe LessonVersionsHelper, type: :helper do
  describe '#lesson_viewer_name' do
    let(:lesson_version) { create(:lesson_version) }

    it 'uses react_player for youtube videos' do
      lesson_version.update(media_type: :youtube_video)

      expect(helper.lesson_viewer_name(lesson_version)).to eq("react_player")
    end

    it 'uses react_player for vimeo videos' do
      lesson_version.update(media_type: :vimeo_video)

      expect(helper.lesson_viewer_name(lesson_version)).to eq("react_player")
    end

    it 'uses markdown for rich text' do
      lesson_version.update(media_type: :rich_text)

      expect(helper.lesson_viewer_name(lesson_version)).to eq("markdown")
    end
  end
end
