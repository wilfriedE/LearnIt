module ControllerHelpers
  def login_user
    before(:each) do
      FactoryGirl.create(:role, :contributor)
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      user.confirm # or set a confirmed_at inside the factory. Only necessary if you are using the "confirmable" module
      sign_in user
    end
  end

  def login_moderator
    before(:each) do
      FactoryGirl.create(:role, :moderator)
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user) # Using factory girl as an example
      user.make_moderator
      user.confirm
      sign_in user
    end
  end

  def login_admin
    before(:each) do
      FactoryGirl.create(:role, :editor)
      FactoryGirl.create(:role, :contributor)
      FactoryGirl.create(:role, :moderator)
      FactoryGirl.create(:role, :admin)
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user) # Using factory girl as an example
      user.make_moderator
      user.make_editor
      user.make_admin
      user.confirm
      sign_in user
    end
  end
end
