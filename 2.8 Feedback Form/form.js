$(document).ready(function(){

    $(".validate").validate({

        rules: {
          name: "required",
          email: {
            required: true,
            email: true
          },
          description: {
            required: true,
          }
        },
        messages: {
          name: "Please specify your name",
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          },
          description: "Please enter description"
        },

        submitHandler: function(){
            $.ajax({
              type: "POST",
              url: "form.php",
              data: {
                name: $("#name").val(),
                email: $("#email").val(),
                description: $("#description").val(),
              }
            })
            .done(function(data) {
              $("#form-message").html(data);
            })
            .fail(function() {
              alert( "error" );
            })
        },
    
      });

});
