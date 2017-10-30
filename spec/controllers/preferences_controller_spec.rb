require 'rails_helper'

RSpec.describe PreferencesController, type: :controller do
  let(:preference) { create :platform_preference }

  describe "GET #new" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :new, xhr: true

        expect(response).not_to render_template("new")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        get :new, xhr: true

        expect(response).not_to render_template("new")
      end

      it 'does nothing' do
        user.make_moderator!
        get :new, xhr: true

        expect(response).not_to render_template("new")
      end

      it 'does nothing' do
        user.make_editor!
        get :new, xhr: true

        expect(response).not_to render_template("new")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows new page' do
        get :new, xhr: true

        expect(response).to render_template("new")
      end
    end
  end

  describe "GET #edit" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :edit, xhr: true, params: { id: preference.id }

        expect(response).not_to render_template("edit")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        get :edit, xhr: true, params: { id: preference.id }

        expect(response).not_to render_template("edit")
      end

      it 'does nothing' do
        user.make_moderator!
        get :edit, xhr: true, params: { id: preference.id }

        expect(response).not_to render_template("edit")
      end

      it 'does nothing' do
        user.make_editor!
        get :edit, xhr: true, params: { id: preference.id }

        expect(response).not_to render_template("edit")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'shows edit page' do
        get :edit, xhr: true, params: { id: preference.id }

        expect(response).to render_template("edit")
      end
    end
  end

  describe "POST #create" do
    context "unauthenticated user" do
      it 'does nothing' do
        post :create, xhr: true, params: { platform_preference: attributes_for(:platform_preference), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("create")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        post :create, xhr: true, params: { platform_preference: attributes_for(:platform_preference), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("create")
      end

      it 'does nothing' do
        user.make_moderator!
        post :create, xhr: true, params: { platform_preference: attributes_for(:platform_preference), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("create")
      end

      it 'does nothing' do
        user.make_editor!
        post :create, xhr: true, params: { platform_preference: attributes_for(:platform_preference), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("create")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'creates platform_preference' do
        platform_preferences_count = PlatformPreference.all.count
        post :create, xhr: true, params: { platform_preference: attributes_for(:platform_preference).update(preftype: :string), form_id: "preference_field_id_#{preference.id}" }

        expect(platform_preferences_count).to be < PlatformPreference.all.count
        expect(response).to render_template("create")
      end
    end
  end

  describe "PUT #update" do
    context "unauthenticated user" do
      it 'does nothing' do
        put :update, xhr: true, params: { id: preference.id, platform_preference: preference.attributes.update(preftype: :string), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("update")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        put :update, xhr: true, params: { id: preference.id, platform_preference: preference.attributes.update(preftype: :string), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("update")
      end

      it 'does nothing' do
        user.make_moderator!
        put :update, xhr: true, params: { id: preference.id, platform_preference: preference.attributes.update(preftype: :string), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("update")
      end

      it 'does nothing' do
        user.make_editor!
        put :update, xhr: true, params: { id: preference.id, platform_preference: preference.attributes.update(preftype: :string), form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("update")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'updates platform_preference' do
        put :update, xhr: true, params: { id: preference.id, platform_preference: preference.attributes.update(preftype: :string, name: "test_joy"), form_id: "preference_field_id_#{preference.id}" }

        preference.reload
        expect(preference.name).to eq("test_joy")
        expect(response).to render_template("update")
      end
    end
  end

  describe "delete #destroy" do
    context "unauthenticated user" do
      it 'does nothing' do
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("destroy")
      end

      it 'does nothing' do
        user.make_moderator!
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("destroy")
      end

      it 'does nothing' do
        user.make_editor!
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect(response).not_to render_template("destroy")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'deletes platform_preference' do
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect { preference.reload }.to raise_error ActiveRecord::RecordNotFound
        expect(response).to render_template("destroy")
      end

      it 'does not delete platform_preference if in Platform::REQUIRED_PREFERENCES' do
        preference = create(:platform_preference, name: Platform::REQUIRED_PREFERENCES.sample)
        id = preference.id
        delete :destroy, xhr: true, params: { id: preference.id, form_id: "preference_field_id_#{preference.id}" }

        expect(PlatformPreference.find(id)).to eq(preference)
        expect(response).to render_template("destroy")
      end
    end
  end

  describe "get #preference_field" do
    context "unauthenticated user" do
      it 'does nothing' do
        get :preference_field, xhr: true, params: { platform_preference: { preftype: :string }, form_id: "preference_field_id_0099" }
        expect(response).not_to render_template("preference_field")
      end
    end

    context "authenticated unauthorized users" do
      login_user

      it 'does nothing' do
        user.make_contributor!
        get :preference_field, xhr: true, params: { platform_preference: { preftype: :string }, form_id: "preference_field_id_0099" }
        expect(response).not_to render_template("preference_field")
      end

      it 'does nothing' do
        user.make_moderator!
        get :preference_field, xhr: true, params: { platform_preference: { preftype: :string }, form_id: "preference_field_id_0099" }
        expect(response).not_to render_template("preference_field")
      end

      it 'does nothing' do
        user.make_editor!
        get :preference_field, xhr: true, params: { platform_preference: { preftype: :string }, form_id: "preference_field_id_0099" }
        expect(response).not_to render_template("preference_field")
      end
    end

    context "authenticated admin" do
      login_admin

      it 'returns field for platform_preference' do
        get :preference_field, xhr: true, params: { platform_preference: { preftype: :string }, form_id: "preference_field_id_0099" }

        expect(response).to render_template("preference_field")
      end
    end
  end
end
