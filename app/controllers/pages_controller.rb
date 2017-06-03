class PagesController < ApplicationController

  def index
    @page = Page.find_by_name("home") || not_found
    render :show
  end

  def show
    @page = Page.find_by_name(params[:name]) || not_found
  end

  def edit
    @page = Page.find_by_name(params[:name])

    redirect_to page_path(name: @page.name) if !current_user || !current_user.editor?
  end

  def library
      limit = 6
      @lessons = Lesson.offset(params[:lesson_pg].to_i * limit).first(limit)
      @courses = Course.offset(params[:course_pg].to_i * limit ).first(limit)
      @tracks = Track.offset(params[:track_pg].to_i * limit ).first(limit)
  end

  def contribute
  end
end
