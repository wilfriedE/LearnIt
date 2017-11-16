module Notifiable
  extend ActiveSupport::Concern
  include Sanitizable
  include Rails.application.routes.url_helpers

  def notification_for_new_lesson(recipient, lesson)
    message = "Your new Lesson <a href='#{lesson_url(lesson)}'>#{lesson.name}</a> has been submitted \
              for approval. You'll be notified once it's been reviewed."
    create_notification(recipient, "Lesson submitted for Approval", message)
  end

  def notification_for_lesson_approval_change(recipient, lesson)
    message = "<a href='#{lesson_url(lesson)}'>#{lesson.name}</a> has been marked as #{lesson.approval}."
    create_notification(recipient, "Lesson Approval changed", message)
  end

  def notification_for_new_lesson_proposal(recipient, lesson_version)
    message = "Your proposal <a href='#{lesson_version_url(lesson_version)}'>#{lesson_version.name}</a> has been submitted \
              for approval. You'll be notified once it's been reviewed."
    create_notification(recipient, "Lesson update proposal submitted", message)
  end

  def notification_for_lesson_version_approval_change(recipient, lesson_version)
    message = " <a href='#{lesson_version_url(lesson_version)}'>#{lesson_version.name}</a> has been marked as #{lesson_version.approval}."
    create_notification(recipient, "Lesson Version Approval changed", message)
  end

  def notification_for_new_collection(recipient, collection)
    message = "Your new Collection <a href='#{collection_url(collection)}'>#{collection.name}</a> has been submitted \
              for approval. You'll be notified once it's been reviewed."
    create_notification(recipient, "Collection submitted for Approval", message)
  end

  def notification_for_collection_approval_change(recipient, collection)
    message = "<a href='#{collection_url(collection)}'>#{collection.name}</a> has been marked as #{collection.approval}."
    create_notification(recipient, "Collection Approval changed", message)
  end

  def create_notification(recipient, name, description)
    Notification.create(recipient: recipient, name: name, description: description)
  end
end
