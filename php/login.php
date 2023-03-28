<?php

$host = "localhost";
$username = "root";
$password = "Rkumarasanthosh26.";
$database = "guvi";
$conn = mysqli_connect($host, $username, $password, $database);

// check if connection succeeded
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$Name = mysqli_real_escape_string($conn, $_POST['Name']);
$password = mysqli_real_escape_string($conn, $_POST['password']);


$query = "SELECT * FROM users WHERE Name='$Name'";
$result = mysqli_query($conn, $query);

// check if query succeeded and if user was found
if ($result && mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  $stored_password = $row['password'];
  // verify password
  if (password_verify($password, $stored_password)) {
    // authentication successful
    echo 'success';
      
    
    
  } else {
    // authentication failed
    echo 'failure';
  }

}
// close database connection
mysqli_close($conn);
?>
