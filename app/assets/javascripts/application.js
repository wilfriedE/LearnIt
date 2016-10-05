// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//
//Rails Comonents
//= require bootstrap-sass
//= require bootstrap-material-design
//= require bluebird
//= require perfect-scrollbar
//= require mustache
//= require html.sortable
//= require sifter
//= require microplugin
//= require selectize
//= require cocoon
//
//= require_tree .
$(document).on('page:change', function() {
  //make init calls and such here
  $.material.init();
  $('.scrollable').perfectScrollbar();
  $(document).on('click', '.nested_removable', function(e){
    e.preventDefault();
    var parent =  $(this).attr("data-remove");
    var item_field = $(this).closest(parent);
    item_field.remove();
  });
});
