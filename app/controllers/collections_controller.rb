class CollectionsController < ApplicationController
  def index; end

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
    authorize @collectible, :new?
    respond_to :js
  end

  def remove_collection_item
    collection = Collection.find(params[:id])
    @collection_item = collection.collection_items.where(id: params[:collection_item_id]).first
    @collection_item.destroy!
    @field_id = params[:field_id]
    respond_to :js
  end

  def create
    @collection = Collection.new(collection_params.merge(creator: current_user))
    if @collection.save
      @collection.destroy! unless @collection.update_attributes!(collection_items_attributes: build_colection_items(@collection))
      redirect_to collection_path(@collection)
    else
      render "new"
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params.merge(collection_items_attributes: build_colection_items(@collection)))
      redirect_to collection_path(@collection)
    else
      render "edit"
    end
  end

  private

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
end
