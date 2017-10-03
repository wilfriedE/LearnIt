module CollectionsHelper
  def collectible_h_path(collectible)
    return lesson_path(id: collectible.id) if collectible.is_a? Lesson
    return lesson_version_path(id: collectible.id) if collectible.is_a? LessonVersion
    return collection_path(id: collectible.id) if collectible.is_a? Collection
  end

  def collection_approval_action(action)
    return "Approve Collection" if action.to_sym == :approved
    return "Reject Collection" if action.to_sym == :rejected
    "Awaiting Approval"
  end
end
