$(document).on('page:change', function() {
  //Handle Lesson Media Content change
  $('select#media_type_selector').change(function(){
    console.log("hi");
    $("#media_content_field").load("/media_contents/fields/" + $(this).val() + "?lesson_version_id=" + $(this).data("lesson-version-id") );
  });

});
