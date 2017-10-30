import * as Sortable from 'sortablejs'

var ready = () => {
  var update_positions = function (el){
    $(el).children('.collection_item').each(function (i) {
      var position_input = $(this).find('input.collection_item_position');
      position_input.val(i);
    });
  }

  var form_el = document.getElementById('collectibles');
  window.CollectionItems = Sortable.create(form_el, {
    animation: 150,
    ghostClass: 'ghost',
    sort: true
  });

  $("body").on('DOMSubtreeModified', "#collectibles", function(evt) {
      update_positions(evt.target);
  });

  $(".remove-field").on('click', function(evt) {
    var field_id = $(evt.target).data("field-id");
    $("#" + field_id).remove();
  });
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
