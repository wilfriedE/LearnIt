module ControllerMacros
  def login_user
    let(:user) { FactoryBot.create(:user) }

    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user.confirm
      sign_in user
    end
  end

  def login_contributor
    let(:user) { FactoryBot.create(:user) }

    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user.make_contributor!
      user.confirm
      sign_in user
    end
  end

  def login_moderator
    let(:user) { FactoryBot.create(:user) }

    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user.make_moderator!
      user.confirm
      sign_in user
    end
  end

  def login_editor
    let(:user) { FactoryBot.create(:user) }

    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user.make_editor!
      user.confirm
      sign_in user
    end
  end

  def login_admin
    let(:user) { FactoryBot.create(:user) }

    before(:each) do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user.make_admin!
      user.confirm
      sign_in user
    end
  end
end
