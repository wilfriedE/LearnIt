module LessonVersionsHelper
  def lesson_viewer_name(lesson_version)
    return "react_player" if LessonVersion::REACT_PLAYER_TYPES.include? LessonVersion.media_types[lesson_version.media_type]
    return "markdown"     if lesson_version.media_type.to_sym == :rich_text
    "undefined"
  end
end
