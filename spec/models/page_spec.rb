require 'rails_helper'

RSpec.describe Page, type: :model do
  it "has name and title" do
    expect(build(:page, name: nil)).not_to be_valid
    expect(build(:page, title: nil)).not_to be_valid

    home = create(:page, name: "Home", title: "Hello World", body: "It's body")

    expect(home).to be_valid
  end

  it "has a unique name" do
    page1 = create(:page, name: "A page")
    page2 = create(:page, name: "Another Page")

    expect(page1).to be_valid
    expect(page2).to be_valid
    expect(build(:page, name: "Another Page")).not_to be_valid
  end

  context "Platform::REQUIRED_PAGES" do
    it 'is default if in Platform Required pages' do
      page = create(:page, name: Platform::REQUIRED_PAGES.sample)

      expect(page).to be_default
    end
  end
end
