$(document).ready(function() {
    // Get the profile details from the server and display them
    $.ajax({
        url: "./php/profile.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $("#Name").text(data.Name);
            $("#email").text(data.email);
            $("#dob").text(data.dob);
            $("#address").text(data.address);
            $("#phone").text(data.phone);
        }
     });


        $('#edit-btn').click(function(e) {
          e.preventDefault(); // prevent default button behavior
          
          $.ajax({
            url: 'editprofile.html', // URL of the editprofile HTML file
            type: 'GET', // HTTP method
            dataType: 'html', // response data type
            success: function(response) {
              $('#content').html(response); // replace content of #content element with the response
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log('Error: ' + textStatus + ' - ' + errorThrown); // log error to console
            }
          });
        });
      });
      

        // Populate the edit form with the current profile details
        $.ajax({
            url: "./php/update.php",
            type: "GET",
            dataType: "json",
            success: function(data) {
                $("#Name-input").val(data.Name);
                $("#email-input").val(data.email);
                $("#dob-input").val(data.dob);
                $("#address-input").val(data.address);
                $("#phone-input").val(data.phone);
            }
        });
    

    // Hide the edit form and show the profile details when the cancel button is clicked
    $(document).ready(function() {
        $('#cancel-btn').click(function(e) {
          e.preventDefault(); // prevent default button behavior
          
          $.ajax({
            url: 'profile.html', // URL of the profile HTML file
            type: 'GET', // HTTP method
            dataType: 'html', // response data type
            success: function(response) {
              $('#content').html(response); // replace content of #content element with the response
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log('Error: ' + textStatus + ' - ' + errorThrown); // log error to console
            }
          });
        });
      });
      
    $('#logout-btn').click(function() {
		$.ajax({
			url: './php/logout.php',
			method: 'GET',
			success: function(response) {
				window.location.href = './index.html';
			},
			error: function(xhr, status, error) {
				console.log('Error logging out:', error);
			}
		});
	});


    // Handle the form submission when the save button is clicked
    $("#edit-form").submit(function(event) {
        event.preventDefault();

        // Get the form data and send it to the server via AJAX
        var formData = $(this).serialize();
        $.ajax({
            url: "./php/profile.php",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(data) {
                // Display a success message and update the profile details
                $("#success-message").text(data.message);
                $("#profile-details").show();
                $("#edit-details").hide();
                $("#name").text(data.name);
                $("#email").text(data.email);
                $("#dob").text(data.dob);
                $("#address").text(data.address);
                $("#phone").text(data.phone);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Display an error message
                $("#error-message").text("An error occurred while updating the profile details.");
            }
        });
    });

