require 'test_helper'

class MediaContentsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get fields" do
    get :fields
    assert_response :success
  end

end
