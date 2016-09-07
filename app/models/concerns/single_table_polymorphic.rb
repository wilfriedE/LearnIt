module SingleTablePolymorphic
  extend ActiveSupport::Concern

  included do
    self.reflect_on_all_associations.select{|a| a.options[:polymorphic]}.map(&:name).each do |name|
      define_method "#{name.to_s}_type=" do |class_name|
        super(class_name.constantize.base_class.name)
      end
    end
  end
end
