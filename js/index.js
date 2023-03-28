$(document).ready(function() {
  // Load login form on login button click
  $('#login-btn').click(function() {
    
    loadModal('./login.html');
  });

  // Load register form on register button click
  $('#register-btn').click(function() {
    loadModal('./register.html');
  });
});

function loadModal(url) {
  // Use AJAX to load the HTML content of the form
  $.ajax({
    url: url,
    success: function(response) {
      // Display the form inside the modal
      $('#modal').html(response);
      $('#modal').show();
      // Attach a click event listener to the close button
      $('#modal .close-btn').click(function() {
        $('#modal').hide();
      });
    },
    error: function(_xhr) {
      // Display an error message if the AJAX request fails
      alert('Error loading form.');
    }
  });
}
