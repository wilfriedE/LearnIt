require 'rails_helper'

RSpec.describe Platform, type: :model do
  describe "properties" do
    let(:platform) { Platform.instance }

    it "has a default name" do
      expect(platform.name).to be
    end
  end
end
