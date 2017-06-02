require 'rails_helper'

RSpec.describe Page, type: :model do
  it "has name, title and body" do
    expect { create(:page, name: nil) }.to raise_error(ActiveRecord::RecordInvalid)
    expect { create(:page, title: nil) }.to raise_error(ActiveRecord::RecordInvalid)
    expect { create(:page, body: nil) }.to raise_error(ActiveRecord::RecordInvalid)

    home = create(:page, name: "Home", title: "Hello World", body: "It's body")

    expect(home).to be_valid
  end

  it "has a unique name" do
    page1 = create(:page)
    page3 = create(:page, name: "Another Page")

    expect(page1).to be_valid
    expect {create(:page)}.to raise_error(ActiveRecord::RecordInvalid)
    expect(page3).to be_valid
  end
end
