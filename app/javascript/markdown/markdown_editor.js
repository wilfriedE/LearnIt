var marked = require('marked');

var ready = () => {
  var input   = $(".markdown-editor");
  var preview = $("#" + input.data("previewer"));

  input.on('input propertychange paste', function () {
    preview.html(marked(input.val()));
  });
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
