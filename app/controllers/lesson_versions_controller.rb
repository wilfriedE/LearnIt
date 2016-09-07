class LessonVersionsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    redirect_to lessons_path
  end

  def show
    @course = nil
    @lesson = nil
    @lesson_version = LessonVersion.find(params[:id])
  end

  def new
    redirect_to new_lesson_path
  end

  def edit
    #only lesson version creator/owner can edit as well as moderators
    #one cannot edit a lesson version if it's currently the active_version of
    # a lesson unless you are a moderator.
  end

  def create
    @lesson_version = LessonVersion.new(lesson_version_params)
    @media = buildMediaContent(params[:lesson_version][:media_attributes][:type])
    @lesson_version.media = @media
    respond_to do |format|
      if @lesson_version.save && (@lesson_version.user_contributors += [current_user])
        if !@lesson_version.lesson
          @lesson = Lesson.new()
          @lesson.active_version =  @lesson_version
          @lesson.save
          @lesson_version.lesson = @lesson
          @lesson_version.save
          new_lesson_activity(@lesson)
        else
          updated_lesson_activity(@lesson_version)
        end
        format.html { redirect_to @lesson_version, notice: 'Lesson was successfully created.' }
        format.json { render :show, status: :created, location: @lesson_version }
      else
        format.html { redirect_to propose_update_lesson_url }
        format.json { render json: @lesson_version.errors, status: :unprocessable_entity }
      end
    end
  end

  protected
  def buildMediaContent(type)
    if MediaContent.types.include? type.strip()
      media_klass = Object.const_get type.strip()
      media_params = nil
      case type.strip()
      when YoutubeContent.to_s
        media_params = youtube_content_params
      when VimeoContent.to_s
        media_params = vimeo_content_params
      end
      media = media_klass.new(media_params)
      return media
    else
      return MediaContent.new()
    end
  end

  private
  def lesson_version_params
    params.require(:lesson_version).permit(:name, :description, :lesson_id,
            :media_attributes => [:type, :video_url],
            :topic_items_attributes => [:id, :_destroy, :topic_id,
              :topic_attributes => [:id, :name]])
  end

  def youtube_content_params
    params.require(:youtube_content).permit(:video_url)
  end

  def vimeo_content_params
    params.require(:vimeo_content).permit(:video_url)
  end

  def new_lesson_activity(lesson)
    ModTicketActivity.create_ticket("New Lesson: ##{lesson.id} available.",
     "#{lesson.name} was recently created awaiting approval",
      [lesson])
    UserFeedActivity.create_user_notification(current_user, "New Lesson: ##{lesson.id} submitted for approval.",
     "Thank you for contributing #{lesson.name}. It has been submitted for review by moderators.",
      [lesson])
  end

  def updated_lesson_activity(lesson_version)
    ModTicketActivity.create_ticket("New LessonVersion for Lesson: ##{lesson_version.lesson.id}",
     "An update to #{lesson_version.lesson.name} has been proposed by: #{current_user.nickname}\n reason: #{lesson_version.reason}",
      [lesson_version])
    track.contributions.each do |contributor|
      UserFeedActivity.create_user_notification(contributor, "Proposal for update to Lesson: ##{lesson_version.lesson.name} has been received.",
       "LessionVersion: #{lesson_version.id}(#{lesson_version.name}), has been submitted for moderator approval. You will be notified when it gets accepted.",
        [lesson_version])
    end
  end

end
