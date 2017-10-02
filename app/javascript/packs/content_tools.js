import '../content-tools'
import 'ContentTools'

var ready = () => {
  var editor = ContentTools.EditorApp.get();

  editor.init('*[data-editable]', 'data-name');
  editor.createPlaceholderElement("<p>Empty Page</p>");
  editor.addEventListener('saved', function (ev) {
      var name, dom_element, action, method, payload, dataset, regions, req;

      // Check that something changed
      regions = ev.detail().regions;
      if (Object.keys(regions).length == 0) {
          return;
      }

      // Set the editor as busy while we save our changes
      this.busy(true);

      // Collect the contents of each region into a FormData instance
      payload = {};
      for (name in regions) {
          if (regions.hasOwnProperty(name)) {
              payload[name] = regions[name];
          }
      }

      // Set action path and http method
      dom_element = $("#content-editor-data");
      action      = dom_element.data("action");
      method      = dom_element.data("method");

      // Send the updated content to the server to be saved
      req = $.ajax({ beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                     method: method, url: action, data: payload});

      req.done(function() {
          // Save was successful, notify the user with a flash
          new ContentTools.FlashUI('ok');
      });

      req.fail(function() {
          // Save failed, notify the user with a flash
          new ContentTools.FlashUI('no');
      });

      req.always(function() {
          // Make sure the editor is no longer set in a busy state
          ContentTools.EditorApp.get().busy(false);
      });
  });
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
