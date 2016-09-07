class AddMarkingToSubscription < ActiveRecord::Migration
  def change
    add_column :subscriptions, :marking, :string
  end
end
