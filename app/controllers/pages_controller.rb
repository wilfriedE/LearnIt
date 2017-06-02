class PagesController < ApplicationController
  def index
    @active = "home"
  end

  def show
    @page = Page.find_by_name(params[:name]) or not_found
    @active = @page.name
  end

  def edit
  end
end
