<?php
require_once "mongo_conn.php";

// Get the form data
$name = $_POST["name"];
$email = $_POST["email"];
$dob = $_POST["dob"];
$address = $_POST["address"];
$phone = $_POST["phone"];

// Update the user details in MongoDB
$updateResult = $collection->updateOne(
    array("email" => $email),
    array('$set' => array(
        "name" => $name,
        "dob" => $dob,
        "address" => $address,
        "phone" => $phone
    ))
);

// Check if the update was successful
if ($updateResult->getModifiedCount() == 1) {
    // Return a success message and the updated user details
    echo json_encode(array(
        "success" => true,
        "message" => "Profile details updated successfully.",
        "name" => $name,
        "email" => $email,
        "dob" => $dob,
        "address" => $address,
        "phone" => $phone
    ));
} else {
    // Return an error message
    echo json_encode(array(
        "success" => false,
        "message" => "An error occurred while updating the profile details."
    ));
}
?>
