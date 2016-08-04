module ApplicationHelper
    def generalized_card(item, item_type)
      case item_type
      when "Lesson"
        lesson_card(item)
      when "LessonVersion"
        lesson_version_card(item)
      when "Course"
        course_card(item)
      when "Track"
        track_card(item)
      when "User"
        user_card(item)
      else
        "Unsuported item_type: " + item_type
      end
    end
end
