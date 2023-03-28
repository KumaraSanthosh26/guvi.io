<?php
$client = new MongoDB\Client("mongodb://localhost:27017");

$collection = $client->Register->userdata;

$cursor = $collection->find();

foreach ($cursor as $document) {
    echo "<p>Name: " . $document->Name . "</p>";
    echo "<p>Email: " . $document->email . "</p>";
    echo "<p>Date of Birth: " . $document->dob . "</p>";
    echo "<p>Address: " . $document->address . "</p>";
    echo "<p>Phone No: " . $document->phone . "</p>";
}
?>
