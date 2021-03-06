class PreferencesController < ApplicationController
  before_action :verify_access

  def new
    @preference = PlatformPreference.new
    respond_to :js
  end

  def edit
    @row_id = params[:row_id]
    @preference = PlatformPreference.find(params[:id])
    respond_to :js
  end

  def create
    @form_id    = params[:form_id]
    @preference = PlatformPreference.new(preference_params)
    @preference.save
    respond_to :js
  end

  def update
    @form_id    = params[:form_id]
    @preference = PlatformPreference.find(params[:id])
    @preference.update_attributes(preference_params)
    respond_to :js
  end

  def destroy
    @row_id = params[:row_id]
    @preference = PlatformPreference.find(params[:id])

    if @preference.default?
      @preference.errors.add(:name, "This preference is required")
    else
      @preference.destroy
    end
    respond_to :js
  end

  def preference_field
    @preftype      = params[:platform_preference][:preftype]
    @form_id       = params[:form_id]
    @prefence      = PlatformPreference.find(params[:preference_id]) unless params[:preference_id].blank?
    @default_value = @prefence.value if @prefence && @prefence.preftype.to_sym == @preftype.to_sym
    respond_to :js
  end

  private

  def preference_params
    preftype = params[:platform_preference][:preftype]
    pref_field = PlatformPreference.preftypes[preftype.to_sym] ? "#{preftype}_field".to_sym : :string_field
    params.require(:platform_preference).permit(:name, :preftype, pref_field)
  end

  def verify_access
    authorize :administrate, :access?
  end
end
