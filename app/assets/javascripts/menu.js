$( document ).on('turbolinks:load', function() {
  var menu = $("#main-menu");
  var hideMenu = $("#main-menu .hide-menu");
  var showMenu = $("#show-menu-btn");

  // TODO: TOO MUCH HAPPENING HERE
  hideMenu.on( "click", function() {
    menu.animate({width: "20px", opacity: 0}, {duration: "fast", easing: "linear", complete: function(){
      showMenu.addClass( "active" ).show("slow");
      menu.hide();
    }});
  });

  showMenu.on( "click", function() {
    menu.animate({width: "100%", opacity: 1}, {duration: "fast", easing: "linear", complete:  function(){
      showMenu.removeClass( "active" ).hide("slow");
      menu.show();
    }});
  });
})
