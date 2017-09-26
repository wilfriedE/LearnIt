module CollectionsHelper
  def collectible_h_path(collectible)
    return lesson_path(id: collectible.id) if collectible.is_a? Lesson
    return lesson_version_path(id: collectible.id) if collectible.is_a? LessonVersion
    return collection_path(id: collectible.id) if collectible.is_a? Collection
  end
end
