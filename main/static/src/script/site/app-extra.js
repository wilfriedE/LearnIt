// Loading Lesson Player
if (typeof lesson_version_id !== 'undefined') {
    $( "#lesson-player" ).load( "/lesson_version/"+lesson_version_id);
};

// AJAX FORMS 
$.ajaxSetup({
beforeSend: function(xhr, settings) {
     if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
         xhr.setRequestHeader("X-CSRFToken", csrftoken)
         }
     }
});

$(function() {
    $('form[data-autosubmit]').autosubmit();
});

(function($) {
  $.fn.autosubmit = function() {
    this.submit(function(event) {
      var form = $(this);
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
      }).done(function(data) {
      	$("#submit-form-btn").html("Successfull");
      	$("body").append(data.action);
      }).fail(function() {
        $("#submit-form-btn").removeClass( "disabled" ).removeAttr("disabled").html("Something Went Wrong. Retry");
      });
      event.preventDefault();
    });
  }
})(jQuery)


//Some Functions

function secondsToString(seconds) {
	var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	return numminutes.toFixed(0)+ ":" + ( numseconds < 10 ? "0" : "") + numseconds.toFixed(0);
}