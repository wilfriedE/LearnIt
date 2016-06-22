require 'test_helper'

class Moderate::TracksControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
