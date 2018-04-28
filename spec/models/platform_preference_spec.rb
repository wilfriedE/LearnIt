require 'rails_helper'

RSpec.describe PlatformPreference, type: :model do
  let(:platform) { Platform.new }
  it "is available through platform module" do
    preference1 = create(:platform_preference, preftype: PlatformPreference.preftypes[:integer], name: "pref1", integer_field: 100)
    preference2 = create(:platform_preference, preftype: PlatformPreference.preftypes[:integer], name: "pref2", integer_field: 20)
    preference3 = create(:platform_preference, preftype: PlatformPreference.preftypes[:string], name: "description", string_field: "A learning platform for you!")

    expect(platform.pref :pref1).to eq(preference1.value)
    expect(platform.pref :pref2).to eq(preference2.value)
    expect(platform.pref :description).to eq(preference3.value)
  end

  context "Platform::REQUIRED_PREFERENCES" do
    it 'is default if in Platform Required Preferences' do
      preference = create(:platform_preference, name: Platform::REQUIRED_PREFERENCES.sample)

      expect(preference).to be_default
    end
  end
end
