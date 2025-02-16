<?php
header("Content-Type: application/xls");
header("Content-Disposition: attachment; filename=customers_data.xls");
header("Pragma: no-cache");
header("Expires: 0");

$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

$output = "";
$output .= "ID\tName\tPhone\tEmail\tAddress\tCoupon Number\n";

$sql = "SELECT * FROM customers";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $output .= $row['id']."\t".$row['name']."\t".$row['phone']."\t".$row['email']."\t".$row['address']."\t".$row['coupon_number']."\n";
}

echo $output;
$conn->close();
?>
