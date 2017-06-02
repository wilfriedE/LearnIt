require 'rails_helper'

RSpec.describe PlatformPreference, type: :model do
  let(:platform) { Platform.instance }
  it "is available through platform module" do
    preference1 = create(:platform_preference, preftype: PlatformPreference::PREFTYPES[:INTERGER], name: "lessons", integer_field: 100)
    preference2 = create(:platform_preference, preftype: PlatformPreference::PREFTYPES[:INTERGER], name: "courses", integer_field: 20)
    preference3 = create(:platform_preference, preftype: PlatformPreference::PREFTYPES[:STRING], name: "description", string_field: "A learning platform for you!")

    expect(platform.preferences).to include({preference1.name => preference1.value})
    expect(platform.preferences).to include({preference2.name => preference2.value})
    expect(platform.preferences).to include({preference3.name => preference3.value})
  end
end
