module LessonVersionsHelper
  def lesson_version_card(lesson_version)
    render partial: "lesson_versions/card", locals: { lesson_version: lesson_version }
  end
end
