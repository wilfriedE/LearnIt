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
      	$("#submit-form-btn").removeClass( "disabled" ).removeAttr("disabled").html("Successfull");
      	analyzeAjaxRequest(data, form.attr('id'));
        // Optionally alert the user of success here...
      }).fail(function() {
        $("#submit-form-btn").removeClass( "disabled" ).removeAttr("disabled").html("Something Went Wrong");
      });
      event.preventDefault();
    });
  }
})(jQuery)


function analyzeAjaxRequest(result, form_id) {
	$(form_id).remove();
	var resultedData = result;
	if (typeof resultview !== 'undefined') {
    	$( resultview ).prepend( 'You May Now Create a Quiz');
	};
	
}
