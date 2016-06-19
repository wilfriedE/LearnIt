class LessonVersionsController < ApplicationController

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
      if @lesson_version.save
        if !@lesson_version.lesson
          @lesson = Lesson.new()
          @lesson.active_version =  @lesson_version
          @lesson.save
          @lesson_version.lesson = @lesson
          @lesson_version.save
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
end
