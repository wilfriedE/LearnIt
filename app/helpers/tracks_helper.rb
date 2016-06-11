module TracksHelper
  def track_card(track)
    render partial: "tracks/card", locals: { track: track }
  end
  def load_track_course_form_view(course)
    render partial: "tracks/track_course_mustache_template", locals: { course: course }
  end
end
