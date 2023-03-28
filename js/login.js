function submitForm() {
	var Name = document.getElementById("Name").value;
	var password = document.getElementById("password").value;

	if ( Name == "" || password == "") {
		alert("Please fill in all fields.");
		return;
	}

	$.ajax({
		url: "./php/login.php",
		method: "POST",
		data: {
			Name: Name,
			password: password
		},
		success: function(response) {
			if (response == "success") {
				// Load profile.html content into the login.html page
				$.ajax({
					url: "./profile.html",
					method: "GET",
					success: function(response) {
						$("#content").html(response);
					},
					error: function(xhr, status, error) {
						console.log("Error loading profile page:", error);
					}
				});
			} else {
				alert("Invalid username or password.");
			}
		}
	});
}
function loadIndex() {
	$.ajax({
	  url: "./index.html",
	  type: "GET",
	  success: function(response) {
		$("#content").html(response);
	  },
	  error: function(xhr, status, error) {
		console.log("Error loading index page:", error);
	  }
	});
  }
  