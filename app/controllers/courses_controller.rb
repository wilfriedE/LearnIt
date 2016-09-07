class CoursesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :viewing]

  def index
    #if there is a search query, properly handle rendering them
    if params[:q]
      @courses = Course.search(params[:q]).order("created_at DESC")
    else
      limit = 10
      @courses = Course.offset(params[:page].to_i * limit ).first(limit)
    end
    respond_to do |format|
      format.html
      format.json { render json: @courses }
    end
  end

  def show
    @course = Course.find(params[:id])
  end

  def new
    @course = Course.new()
  end

  def edit
    @course = Course.find(params[:id])
    #only those granted permission to edit a course should be able to edit them.
  end

  def viewing
    @course = Course.find(params[:id])
    @course_lesson = @course.course_lessons.find_by_position(params[:position])
    @lesson =  @course_lesson.lesson
    @lesson_version = @lesson.active_version
    render :template => 'lesson_versions/show'
  end

  def create
    @course = Course.new(course_params)
    respond_to do |format|
      if @course.save && (@course.user_contributors += [current_user])
        new_course_activity(@course)
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render :show, status: :created, location: @course }
      else
        format.html { render :new }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @course = Course.find(params[:id])
    @course.topic_items = @course.topic_items.each { |topic_item|
      TopicItem.new(topic_item.attributes.merge({topicable_id: nil}))}
    respond_to do |format|
      if @course.update_attributes(course_params)
        if !@course.contributors.include?(current_user)
          @course.user_contributors += [current_user]
        end
        updated_course_activity(@course)
        format.html { redirect_to @course, notice: 'Course was successfully update.' }
        format.json { render :show, status: :updated, location: @course }
      else
        format.html { render :new }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def course_params
    params.require(:course).permit(:name, :description,
        :course_lessons_attributes => [:id, :_destroy, :position, :lesson_id],
        :topic_items_attributes => [:id, :_destroy, :topic_id,
          :topic_attributes => [:id, :name]])
  end


    def new_course_activity(course)
      ModTicketActivity.create_ticket("New Course: ##{course.id} available.",
       "#{course.name} was recently created awaiting approval",
        [course])
      UserFeedActivity.create_user_notification(current_user, "New Course: ##{course.id} submitted for approval.",
       "Thank you for contributing #{course.name}. It has been submitted for review by moderators.",
        [course])
    end

    def updated_course_activity(course)
      ModTicketActivity.create_ticket("Course: ##{course.id} updated.",
       "#{course.name} was recently updated by #{current_user.nickname}",
        [course])
      course.contributions.each do |contributor|
        UserFeedActivity.create_user_notification(contributor, "Course: ##{course.id} was recently updated.",
         "#{course.name}, has recently been updated.",
          [course])
      end
    end

end
