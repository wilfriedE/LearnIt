require 'test_helper'

class Moderate::ModerationsControllerTest < ActionController::TestCase
  test "should get dashboard" do
    get :dashboard
    assert_response :success
  end

  test "should get activities" do
    get :activities
    assert_response :success
  end

end
