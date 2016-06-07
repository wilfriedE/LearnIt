module CoursesHelper
  def course_card(course)
    render partial: "courses/card", locals: { course: course }
  end
  def load_course_lesson_form_view(lesson)
    render partial: "courses/course_lesson_mustache_template", locals: { lesson: lesson }
  end
end
