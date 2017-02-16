require 'rails_helper'

RSpec.describe Platform, type: :model do
  describe "properties" do
    let(:platform) { Platform }

    it "has a default platform name" do
      expect(platform.platform_name).to eq(ENV['PLATFORM_NAME'])
    end

    it "name can be changed" do
      preference = create(:platform_preference, preftype: PlatformPreference::PREFTYPES[:STRING], name: "name", string_field: "LearnItTest")

      expect(platform.platform_name).to eq("LearnItTest")
    end
  end
end
