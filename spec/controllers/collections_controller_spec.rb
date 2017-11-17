require 'rails_helper'

RSpec.describe CollectionsController, type: :controller do
  let(:collection) { create :collection }

  describe "GET #index" do
    it 'shows collections' do
      get :index

      expect(response).to be_success
    end

    it 'shows collections when searching' do
      get :index, params: { q: { name_cont: "A collection" } }

      expect(response).to be_success
    end
  end

  describe "GET #show" do
    context "unapproved collection" do
      it '404s' do
        get :show, params: { id: collection.id }

        expect(response).to redirect_to root_url
      end
    end

    context "approved collection" do
      before do
        collection.approved!
      end

      it 'shows collection page' do
        get :show, params: { id: collection.id }

        expect(response).to be_success
      end
    end
  end

  describe "GET #new" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :new

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        get :new

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'shows new page' do
        get :new

        expect(response).to be_success
      end
    end
  end

  describe "GET #edit" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        get :edit, params: { id: collection.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        get :edit, params: { id: collection.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "unapproved collection" do
        context "other contributed" do
          it 'redirect_to root' do
            get :edit, params: { id: collection.id }

            expect(response).to redirect_to root_url
          end
        end

        context "self contributed" do
          let(:collection) { create(:collection, creator: user) }

          it 'shows edit page' do
            get :edit, params: { id: collection.id }
            expect(response).to be_success
          end
        end
      end

      context "approved collection" do
        before do
          collection.approved!
        end

        context "other contributed" do
          it 'redirect_to root' do
            get :edit, params: { id: collection.id }

            expect(response).to redirect_to root_url
          end
        end

        context "self contributed" do
          let(:collection) { create(:collection, creator: user) }

          it 'redirects to home' do
            get :edit, params: { id: collection.id }
            expect(response).to redirect_to root_url
          end
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      context "unapproved collection" do
        it 'shows edit page' do
          get :edit, params: { id: collection.id }
          expect(response).to be_success
        end
      end

      context "approved collection" do
        before do
          collection.approved!
        end

        it 'shows edit page' do
          get :edit, params: { id: collection.id }
          expect(response).to be_success
        end
      end
    end
  end

  describe "GET #search_collectible" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :search_collectible, xhr: true, format: :js

        expect(response).not_to render_template("search_collectible")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        get :search_collectible, xhr: true, format: :js

        expect(response).not_to render_template("search_collectible")
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'gives search results' do
        get :search_collectible, xhr: true, format: :js

        expect(response).to render_template("search_collectible")
      end
    end
  end

  describe "GET #player" do
    let(:collection) { create(:collection) }
    login_user

    before(:each) do
      collection.approved!
      create(:collection_item, collection: collection, collectible: create(:lesson), position: 1)
      create(:collection_item, collection: collection, collectible: create(:lesson_version), position: 2)
      create(:collection_item, collection: collection, collectible: create(:collection), position: 3)
    end

    after(:each) do
      CollectionItem.destroy_all
    end

    it 'renders lesson show view when collectible is a lesson' do
      get :player, params: { id: collection.id }

      expect(collection.collection_items.first).to be_lesson
      expect(response).to render_template("lessons/show")
    end

    it 'renders lesson version show view when collectible is a lesson version' do
      get :player, params: { id: collection.id, page: 2 }

      expect(collection.collection_items.second).to be_lesson_version
      expect(response).to render_template("lesson_versions/show")
    end

    it 'renders collection show view when collectible is a collection' do
      get :player, params: { id: collection.id, page: 3 }

      expect(collection.collection_items.third).to be_collection
      expect(response).to render_template("collections/show")
    end
  end

  describe "GET #list_collectibles" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :list_collectibles, xhr: true, format: :js

        expect(response).not_to render_template("list_collectibles")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        get :list_collectibles, xhr: true, format: :js

        expect(response).not_to render_template("list_collectibles")
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'lists collectibles' do
        get :list_collectibles, xhr: true, format: :js

        expect(response).to render_template("list_collectibles")
      end
    end
  end

  describe "GET #add_collectible" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :add_collectible, xhr: true, format: :js

        expect(response).not_to render_template("add_collectible")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        get :add_collectible, xhr: true, format: :js

        expect(response).not_to render_template("add_collectible")
      end
    end

    context "authenticated contributor" do
      login_contributor

      it 'adds collectible' do
        get :add_collectible, xhr: true, format: :js

        expect(response).to render_template("add_collectible")
      end
    end
  end

  describe "GET #remove_collection_item" do
    let(:collection_item) { build(:collection_item) }

    let(:collection) do
      lesson_a = build(:collection_item, collectible: create(:lesson))
      collection_a = build(:collection_item, collectible: create(:collection))

      create(:collection, collection_items: [lesson_a, collection_a, collection_item])
    end

    let(:field_id) { "collection_item_field_#{(Time.now.to_f * 1000).to_i}" }

    context "unauthenticated user" do
      it 'does nothing' do
        delete :remove_collection_item, xhr: true, format: :js, params: { id: collection.id, collection_item_id: collection_item.id, field_id: field_id }

        expect(response).not_to render_template("remove_collection_item")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        delete :remove_collection_item, xhr: true, format: :js, params: { id: collection.id, collection_item_id: collection_item.id, field_id: field_id }

        expect(response).not_to render_template("remove_collection_item")
      end
    end

    context "authenticated contributor" do
      login_contributor

      before do
        collection.update(creator: user)
      end

      it 'deletes collection item from collection' do
        delete :remove_collection_item, xhr: true, format: :js, params: { id: collection.id, collection_item_id: collection_item.id, field_id: field_id }

        expect(response).to render_template("remove_collection_item")
      end
    end
  end

  describe "PUT #collection_approval" do
    let(:collection) do
      lesson_a = build(:collection_item, collectible: create(:lesson))
      collection_a = build(:collection_item, collectible: create(:collection))

      create(:collection, collection_items: [lesson_a, collection_a])
    end

    let(:row_id) { "table_field_id_#{collection.id}" }

    context "unauthenticated user" do
      it 'does nothing' do
        put :collection_approval, xhr: true, format: :js, params: { id: collection.id, row_id: row_id }

        expect(response).not_to render_template("collection_approval")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'does nothing' do
        put :collection_approval, xhr: true, format: :js, params: { id: collection.id, row_id: row_id }

        expect(response).not_to render_template("collection_approval")
      end
    end

    context "authenticated contributor" do
      login_contributor

      before do
        collection.update(creator: user)
      end

      it 'does nothing' do
        put :collection_approval, xhr: true, format: :js, params: { id: collection.id, row_id: row_id }

        expect(response).not_to render_template("collection_approval")
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'handles collection approval' do
        put :collection_approval, xhr: true, format: :js, params: { id: collection.id, row_id: row_id, approval: "approved" }

        collection.reload
        expect(collection).to be_approved
        expect(response).to render_template("collection_approval")
      end
    end
  end

  describe "POST #create" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        post :create, params: { collection: attributes_for(:collection) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        post :create, params: { collection: attributes_for(:collection) }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "invalid collection" do
        it 'allows contributor to retry' do
          post :create, params: { collection: attributes_for(:collection) }

          expect(response).to be_success
          expect(response).to render_template('new')
        end
      end

      context "valid collection" do
        let(:collection_attributes) do
          collection = attributes_for(:collection)
          collectionitem1 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))
          collectionitem2 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))

          collection.merge(collection_items_attributes: { "1": collectionitem1, "2": collectionitem2 })
        end

        it 'shows successfuly created collection' do
          expect { post :create, params: { collection: collection_attributes } }.to change(Collection, :count).by(1)
        end
      end
    end
  end

  describe "PUT #update" do
    context "unauthenticated user" do
      it 'redirect_to root' do
        put :update, params: { id: collection.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated visitor" do
      login_user

      it 'redirect_to root' do
        put :update, params: { id: collection.id }

        expect(response).to redirect_to root_url
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "other contributed" do
        it 'redirect_to root' do
          put :update, params: { id: collection.id, collection: collection.attributes }

          expect(response).to redirect_to root_url
        end
      end

      context "self contributed" do
        let(:collection_attributes) do
          collectionitem1 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))
          collectionitem2 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))

          collection.attributes.merge(collection_items_attributes: { "1": collectionitem1, "2": collectionitem2 })
        end

        before do
          collection.update(creator: user)
        end

        it 'allows changes if not approved' do
          put :update, params: { id: collection.id, collection: collection_attributes }

          expect(response).to redirect_to collection_url(collection)
        end

        it 'allows edit if invalid and not approved' do
          collection_attributes[:collection_items_attributes].delete(:"1")
          put :update, params: { id: collection.id, collection: collection_attributes }

          expect(response).to render_template('edit')
        end

        it 'does not allow changes if approved' do
          collection.approved!

          put :update, params: { id: collection.id, collection: collection_attributes }

          expect(response).to redirect_to root_url
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      let(:collection_attributes) do
        collectionitem1 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))
        collectionitem2 = attributes_for(:collection_item).merge(collectible_type: "Lesson", collectible_id: create(:lesson))

        collection.attributes.merge(collection_items_attributes: { "1": collectionitem1, "2": collectionitem2 })
      end

      it 'allows changes' do
        put :update, params: { id: collection.id, collection: collection_attributes }

        expect(response).to redirect_to collection_url(collection)
      end
    end
  end

  describe "DELETE #destroy" do
    context "unauthenticated user" do
      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: collection.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated visitor" do
      login_user

      it 'do nothing' do
        delete :destroy, xhr: true, format: :js, params: { id: collection.id }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated contributor" do
      login_contributor

      context "other contributed" do
        it 'do nothing' do
          delete :destroy, xhr: true, format: :js, params: { id: collection.id }

          expect(response).not_to render_template("destroy")
        end
      end

      context "self contributed" do
        before do
          collection.update(creator: user)
        end

        it 'allows delete if not approved' do
          delete :destroy, xhr: true, format: :js, params: { id: collection.id }

          expect(response).to render_template("destroy")
        end

        it 'does not allow delete if approved' do
          collection.approved!

          delete :destroy, xhr: true, format: :js, params: { id: collection.id }

          expect(response).not_to render_template("destroy")
        end
      end
    end

    context "authenticated moderator" do
      login_moderator

      it 'allows delete' do
        delete :destroy, xhr: true, format: :js, params: { id: collection.id }

        expect(response).to render_template("destroy")
      end
    end
  end
end
