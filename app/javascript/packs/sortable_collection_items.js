import * as Sortable from 'sortablejs'

$( document ).on('turbolinks:load', () => {
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
})
