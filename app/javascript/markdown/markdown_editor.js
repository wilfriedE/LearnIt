var marked = require('marked');

$( document ).on('turbolinks:load', function(){
  var input   = $(".markdown-editor");
  var preview = $("#" + input.data("previewer"));

  input.on('input propertychange paste', function () {
    preview.html(marked(input.val()));
  });
});
