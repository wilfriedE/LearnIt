class LessonVersionsController < ApplicationController
  include LessonVersionable

  def show
    @lesson_version = LessonVersion.find(params[:id])
    authorize @lesson_version
  end

  def lesson_media_field
    m_type = params[:lesson_version][:media_type]
    @media_type = m_type && LessonVersion.media_types[m_type.to_sym] ? m_type.to_sym : :rich_text
    respond_to :js
  end

  def edit
    @lesson_version = LessonVersion.find(params[:id])
    authorize @lesson_version
  end

  def update
    @lesson_version = LessonVersion.find(params[:id])
    authorize @lesson_version
    @lesson_version.update_attributes(build_lesson_version)
    if @lesson_version.save
      redirect_to lesson_version_path(id: @lesson_version)
    else
      render "lesson_versions/edit"
    end
  end
end
