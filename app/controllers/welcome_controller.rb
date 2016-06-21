# The Welcome controller takes care of general pages.
class WelcomeController < ApplicationController
  def index
    @programs = Program.all
  end

  def library
      limit = 6
      @lessons = Lesson.offset(params[:lesson_pg].to_i * limit).first(limit)
      @courses = Course.offset(params[:course_pg].to_i * limit ).first(limit)
      @tracks = Track.offset(params[:track_pg].to_i * limit ).first(limit)
  end

  def contribute
  end

  def about
  end
end
