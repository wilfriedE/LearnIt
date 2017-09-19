module LessonHelper
  def lesson_approval_action(action)
    return "Approve Lesson" if action.to_sym == :approved
    return "Reject Lesson" if action.to_sym == :rejected
    "Awaiting Approval"
  end
end
