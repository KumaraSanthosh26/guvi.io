<?php
// Connect to MySQL database
$servername = "localhost";
$username = "root";
$password = "Rkumarasanthosh26.";
$dbname = "guvi";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data and sanitize inputs
$Name = filter_var($_POST['Name'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$dob = $_POST['dob'];
$address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Generate a unique ID for MongoDB
$uid = uniqid();

// Check if the user is already registered
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Error: User already registered.";
} else {
    // Insert data into MySQL database
    $sql = "INSERT INTO users (Name, email, dob, address, phone, password) VALUES ('$Name', '$email', '$dob', '$address', '$phone', '$password')";
    $conn->query($sql);

    // Connect to MongoDB database
    $manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

    // Insert data into MongoDB collection
    $bulk = new MongoDB\Driver\BulkWrite;
    $document = ['_id' => $uid, 'Name' => $Name, 'email' => $email, 'dob' => $dob, 'address' => $address, 'phone' => $phone];
    $bulk->insert($document);
    $manager->executeBulkWrite('Register.userdata', $bulk);

    echo "success";
}

// Close database connection
$conn->close();
?>
