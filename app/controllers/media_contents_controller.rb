class MediaContentsController < ApplicationController
  def index
  end

  def fields
    if MediaContent.types.include? params[:type].strip()
      media_klass = Object.const_get params[:type].strip()
      @media = media_klass.new()
      if params[:lesson_version_id].to_i > 0 && @lesson_version = LessonVersion.find(params[:lesson_version_id])
        if @lesson_version.media.type == @media.type
          @media = @lesson_version.media
        end
      end
      render :layout => false
    else
      render :template => 'media_contents/invalid_type'
    end
  end
end
