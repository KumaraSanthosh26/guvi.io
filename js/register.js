$(document).ready(function() {
  $('#register-form').submit(function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form data
    var formData = $(this).serialize();

    // Send the form data using AJAX
    $.ajax({
      type: 'POST',
      url: './php/register.php',
      data: formData,
      success: function(response) {
        if (response === 'success') {
          // Redirect to the index page if registration is successful
          window.location.replace('index.html');
        } else {
          // Show the error message if registration fails
          $('#error').text(response);
          
          $('#Name').val('');
          $('#email').val('');
          $('#dob').val('');
          $('#address').val('');
          $('#phone').val('');
          $('#password').val('');
        }
      },
      error: function(xhr, status, error) {
        console.log('Error: ' + error);
      }
    });
    
  });
});

function loadIndex() {
	$.ajax({
	  url: './index.html',
	  type: 'GET',
	  success: function(response) {
		$('#content').html(response);
	  },
	  error: function(xhr, status, error) {
		console.log('Error loading index page:', error);
	  }
	});
  }