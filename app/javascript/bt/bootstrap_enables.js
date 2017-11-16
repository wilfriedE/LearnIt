var ready = () => {
  // Enable Popovers https://getbootstrap.com/docs/4.0/components/popovers/
  const getAttr = (el, child) => {
    return $(`.data-${child}`, $(el).attr('data-popover')).html();
  };

  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return getAttr(this, 'content');
    }
  });

  // Enable alert dismissal https://getbootstrap.com/docs/4.0/components/alerts/#javascript-behavior
  $(".alert").alert();
  
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
