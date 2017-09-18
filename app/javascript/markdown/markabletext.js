var marked = require('marked');

$( document ).on('turbolinks:load', function(){
  var markabletext = $(".markabletext");

  if (markabletext.length) {
    var html_content = markabletext.html();
    markabletext.html(marked(html_content));
    markabletext.removeClass(".markabletext");
  }
});
