module ApplicationHelper
    def generalized_card(item, item_type)
      case item_type
      when "Lesson"
        lesson_card(item)
      when "LessonVersion"
        lesson_version_card(item)
      when "Course"
        course_card(item)
      when "Track"
        track_card(item)
      when "User"
        user_card(item)
      else
        "Unsuported item_type: " + item_type
      end
    end

    def yield_hierarchically(kontroller_name)
      @layouts = Dir.glob(Rails.root.join('app', 'views', 'layouts').to_s + '/*.{erb}').map { |f| f.split("/").last }
      layouts_arr = []
      kontroller_name.split("::").map { |n| layouts_arr += ["_" + n.remove("Controller").underscore] }
      layouts_arr.map { |nn| nn + ".html.erb"  }.reverse.each do |m|
        if @layouts.include?(m)
          m.slice!(0)
          return m
        end
      end
      return @layouts
    end
end
