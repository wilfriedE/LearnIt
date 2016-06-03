module LessonsHelper
  def lesson_card(lesson)
    render partial: "lessons/card", locals: { lesson: lesson }
  end
end
