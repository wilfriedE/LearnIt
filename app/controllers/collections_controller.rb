class CollectionsController < ApplicationController
  include Notifiable

  def index
    @q = Collection.search(query_params)
    @collections ||= @q.result(distinct: true).page params[:page]
  end

  def show
    @collection = Collection.find(params[:id])
    authorize @collection
  end

  def new
    @collection = Collection.new
    authorize @collection
  end

  def edit
    @collection = Collection.find(params[:id])
    authorize @collection
  end

  def search_collectible
    @collectible_type = params[:collectible_type]
    authorize Collection.new, :new?
    respond_to :js
  end

  def player
    @collection_player = true
    @collection = Collection.find(params[:id])
    authorize @collection, :show?
    @collection_items = @collection.collection_items.page(params[:page]).per(1)
    render_player_view @collection_items.first
  end

  def list_collectibles
    @collectible_type = params[:collectible_type]
    @collectibles = Lesson.search(active_version_name_or_active_version_description_cont: params[:q]).result(distinct: true) if @collectible_type == "Lesson"
    @collectibles = LessonVersion.search(name_or_description_cont: params[:q]).result(distinct: true) if @collectible_type == "LessonVersion"
    @collectibles = Collection.search(name_or_description_cont: params[:q]).result(distinct: true) if @collectible_type == "Collection"
    authorize Collection.new, :new?
    respond_to :js
  end

  def add_collectible
    @row_id = params[:row_id]
    @collectible_type = params[:collectible_type]
    @collectible = Lesson.find(params[:id]) if @collectible_type == "Lesson"
    @collectible = LessonVersion.find(params[:id]) if @collectible_type == "LessonVersion"
    @collectible = Collection.find(params[:id]) if @collectible_type == "Collection"
    @collection_item = CollectionItem.new(collectible: @collectible)
    authorize  Collection.new, :new?
    respond_to :js
  end

  def remove_collection_item
    collection = Collection.find(params[:id])
    authorize collection, :destroy?
    @collection_item = collection.collection_items.where(id: params[:collection_item_id]).first
    @collection_item.destroy
    @field_id = params[:field_id]
    respond_to :js
  end

  def collection_approval
    @row_id = params[:row_id]
    @collection = Collection.find(params[:id])
    authorize @collection, :moderate?
    return unless Collection.approvals[params[:approval]] && @collection.approval != params[:approval]
    @collection.update(approval: params[:approval].to_sym)
    notification_for_collection_approval_change(@collection.creator, @collection)
    respond_to :js
  end

  def create
    @collection = Collection.new(collection_params.merge(creator: current_user))
    authorize @collection
    valid_collection_items = valid_collection_items_count? @collection
    if valid_collection_items && @collection.save && @collection.update(collection_items_attributes: build_colection_items(@collection))
      notification_for_new_collection(current_user, @collection)
      redirect_to collection_path(@collection)
    else
      @collection.destroy
      render "new"
    end
  end

  def update
    @collection = Collection.find(params[:id])
    authorize @collection
    valid_collection_items = valid_collection_items_count? @collection
    if valid_collection_items && @collection.update(collection_params.merge(collection_items_attributes: build_colection_items(@collection)))
      redirect_to collection_path(@collection)
    else
      render "edit"
    end
  end

  def destroy
    @row_id = params[:row_id]
    @collection = Collection.find(params[:id])
    authorize @collection
    @collection.destroy
    respond_to :js
  end

  private

  def query_params
    return { approval_eq: Collection.approvals[:approved] } unless params[:q]
    params.require(:q).merge(approval_eq: Collection.approvals[:approved]).permit!
  end

  def collection_params
    params.require(:collection).permit(:name, :description)
  end

  def build_colection_items(collection)
    collection_items = []
    params.require(:collection).fetch(:collection_items_attributes).each do |_e, v|
      collection_items << { id: v[:id], collection: collection, collectible_type: v[:collectible_type],
                            collectible_id: v[:collectible_id], position: v[:position] }
    end
    collection_items
  end

  def valid_collection_items_count?(collection)
    valid = false
    if params.require(:collection).include? :collection_items_attributes
      valid = params.require(:collection).fetch(:collection_items_attributes).values.count > 1
    end
    collection.errors.add(:base, "A collection must have at least two Collection Items") unless valid
    valid
  end

  def render_player_view(collection_item)
    render_lesson_viewer collection_item.collectible if collection_item.lesson?
    render_lesson_version_viewer collection_item.collectible if collection_item.lesson_version?
    render_collection_viewer collection_item.collectible if collection_item.collection?
  end

  def render_lesson_viewer(lesson)
    @lesson = lesson
    render "lessons/show"
  end

  def render_lesson_version_viewer(lesson_version)
    @lesson_version = lesson_version
    render "lesson_versions/show"
  end

  def render_collection_viewer(collection)
    @collection = collection
    render "collections/show"
  end
end
