var marked = require('marked');

var ready = () => {
  var markabletext = $(".markabletext");

  if (markabletext.length) {
    var html_content = markabletext.html();
    markabletext.html(marked(html_content));
    markabletext.removeClass(".markabletext");
  }
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
