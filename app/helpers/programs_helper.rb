module ProgramsHelper
  def program_card(program)
    render partial: "programs/card", locals: { program: program }
  end
  def curated_item_card(curation)
    case curation.curatable_type
    when "Lesson"
      lesson_card(curation.curatable)
    when "Course"
      course_card(curation.curatable)
    when "Track"
      track_card(curation.curatable)
    else
      "Unsuported curatable_type: " + curation.curatable_type
    end
  end
end
