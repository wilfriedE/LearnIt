module LessonVersionable
  extend ActiveSupport::Concern
  include Sanitizable

  def make_active_version(lesson_version)
    lesson = lesson_version.lesson
    lesson.active_version.rejected!
    lesson.active_version = lesson_version
    lesson.save
  end

  def build_lesson_version
    lesson_version_params.merge(data: build_lesson_version_data, creator_id: current_user.id)
  end

  def build_lesson_version_data
    media_type = params[:lesson_version][:media_type]
    return nil unless LessonVersion.media_types[media_type.to_sym]
    data = {}
    data.update(react_player_data) if LessonVersion::REACT_PLAYER_TYPES.include? LessonVersion.media_types[media_type.to_sym]
    data.update(text: cleaned_html(params[:lesson_version][:data][:rich_text])) if media_type.to_sym == :rich_text
    data.to_json
  end

  def react_player_data
    { url: params[:lesson_version][:data][:url] }
  end

  def lesson_version_params
    params.require(:lesson_version)
          .permit(:name, :description, :media_type)
  end
end
