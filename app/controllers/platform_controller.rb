class PlatformController < ApplicationController
  before_action :verify_access, except: [:pages]

  def index; end

  def preferences
    @preferences ||= PlatformPreference.all
  end

  def pages
    authorize Page.new, :create?
    @pages ||= Page.all
  end

  def users
    @q = User.search(params[:q])
    @users = @q.result(distinct: true).page(params[:page])
  end

  def make_user_admin
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    @user.make_admin!
    render "user_role_change"
  end

  def make_user_editor
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    @user.make_editor!
    render "user_role_change"
  end

  def make_user_moderator
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    @user.make_moderator!
    render "user_role_change"
  end

  def make_user_contributor
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    @user.make_contributor!
    render "user_role_change"
  end

  def ban_user
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    @user.ban!
    render "user_role_change"
  end

  def remove_user_role
    @row_id = params[:row_id]
    @user = User.find(params[:id])
    role_user = @user.role_users.where(role: params[:role_id])
    @user.role_users.destroy(role_user)
    render "user_role_change"
  end

  private

  def verify_access
    authorize :administrate, :access?
  end
end
