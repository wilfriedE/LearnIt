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
//= require bootstrap-sprockets
//
//Bower Comonents
//= require bluebird/js/browser/bluebird
//= require bootstrap-material-design/scripts/material
//= require bootstrap-material-design/scripts/ripples
//= require perfect-scrollbar/js/perfect-scrollbar.jquery
//
//= require_tree .
$(document).on('page:change', function() {
  //make init calls and such here
  $.material.init();
  $('.scrollable').perfectScrollbar();

});
