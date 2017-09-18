class LessonVersionsController < ApplicationController
  include LessonVersionable

  def show
    @lesson_version = LessonVersion.find(params[:id])
  end

  def lesson_media_field
    m_type = params[:lesson_version][:media_type]
    @media_type = m_type && LessonVersion.media_types[m_type.to_sym] ? m_type.to_sym : :rich_text
    respond_to :js
  end

  def edit
    # only lesson version creator/owner can edit as panel as moderators
    # one cannot edit a lesson version if it's currently the active_version of
    # a lesson unless you are a moderator.
  end

  def update; end
end
