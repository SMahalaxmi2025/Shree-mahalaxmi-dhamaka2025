submit.php
<?php
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_database_name";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from form
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$address = $_POST['address'];
$coupon = $_POST['coupon'];

// Insert data into database
$sql = "INSERT INTO customers (name, phone, email, address, coupon_number) 
        VALUES ('$name', '$phone', '$email', '$address', '$coupon')";

if ($conn->query($sql) === TRUE) {
    echo "डेटा यशस्वीरित्या सेव्ह झाला!";
} else {
    echo "त्रुटी: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
