module MediaContentsHelper
  def load_media_viewport(media)
    render partial: "media_contents/viewport", locals: { media: media }
  end
end
