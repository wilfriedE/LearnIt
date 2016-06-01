require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get library" do
    get :library
    assert_response :success
  end

  test "should get contribute" do
    get :contribute
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

end
