class PagesController < ApplicationController
  include Sanitizable

  def index
    @page = Page.find_by(name: "home") || not_found
    render :show
  end

  def show
    @page = Page.find_by(name: params[:name]) || not_found
  end

  def library
    limit = 6
    @lessons = Lesson.offset(params[:lesson_pg].to_i * limit).first(limit)
    @courses = Course.offset(params[:course_pg].to_i * limit).first(limit)
    @tracks = Track.offset(params[:track_pg].to_i * limit).first(limit)
  end

  def new
    @page = Page.new
    authorize @page
    respond_to :js
  end

  def edit
    @row_id = params[:row_id]
    @page = Page.find_by(name: params[:name])
    authorize @page
    respond_to :js
  end

  def edit_wysiwyg
    @page = Page.find_by(name: params[:name])
    authorize @page, :edit?
  end

  def create
    @form_id = params[:form_id]
    @page = Page.new(page_params)
    authorize @page
    @page.body = cleaned_html(params["page"]["body"])
    @page.save
    respond_to :js
  end

  def update
    @form_id = params[:form_id]
    @page    = Page.find_by(name: params[:name])
    authorize @page
    if params[:"page-body"]
      @page.update_attributes(body: cleaned_html(params[:"page-body"]))
    else
      @page.update_attributes(page_params.merge(body: cleaned_html(params["page"]["body"])))
    end
    respond_to :js
  end

  def delete
    @row_id = params[:row_id]
    @page = Page.find_by(name: params[:name])
    authorize @page
    @page.destroy unless @page.default?
    respond_to :js
  end

  private

  def page_params
    params.require(:page).permit(:name, :title)
  end
end
