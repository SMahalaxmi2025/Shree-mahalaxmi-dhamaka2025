<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mahalaxmi_dhamaka";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("कनेक्शन फेल झाले: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];

    $sql = "INSERT INTO users (name, mobile, address) VALUES ('$name', '$mobile', '$address')";

    if ($conn->query($sql) === TRUE) {
        echo "नोंदणी यशस्वी झाली!";
    } else {
        echo "त्रुटी: " . $conn->error;
    }
}

$conn->close();
?>
