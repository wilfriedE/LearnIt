class CollectionsController < ApplicationController
  def index; end

  def show
    @collection = Collection.find(params[:id])
  end

  def new
    @collection = Collection.new
    authorize @collection
  end

  def search_collectible
    @collectible_type = params[:collectible_type]
    respond_to :js
  end

  def list_collectibles
    @collectible_type = params[:collectible_type]
    @collectibles = Lesson.search(active_version_name_or_active_version_description_cont: params[:q]).result(distinct: true) if @collectible_type == "Lesson"
    @collectibles = LessonVersion.search(name_or_description_cont: params[:q]).result(distinct: true) if @collectible_type == "LessonVersion"
    @collectibles = Collection.search(name_or_description_cont: params[:q]).result(distinct: true) if @collectible_type == "Collection"
    respond_to :js
  end

  def add_collectible
    @row_id = params[:row_id]
    @collectible_type = params[:collectible_type]
    @collectible = Lesson.find(params[:id]) if @collectible_type == "Lesson"
    @collectible = LessonVersion.find(params[:id]).result(distinct: true) if @collectible_type == "LessonVersion"
    @collectible = Collection.find(params[:id]).result(distinct: true) if @collectible_type == "Collection"
    @collection_item = CollectionItem.new(collectible: @collectible)
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

  private

  def collection_params
    params.require(:collection).permit(:name, :description)
  end

  def build_colection_items(collection)
    collection_items = []
    params.require(:collection).fetch(:collection_items_attributes).each do |_e, v|
      collection_items << { collection: collection, collectible_type: v[:collectible_type],
                            collectible_id: v[:collectible_id], position: v[:position] }
    end
    collection_items
  end
end
