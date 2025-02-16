<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $coupon_number = $_POST['coupon_number'];

    // स्क्रीनशॉट अपलोड करा
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["screenshot"]["name"]);
    move_uploaded_file($_FILES["screenshot"]["tmp_name"], $target_file);

    // Excel फाईलमध्ये सेव्ह करा
    $file = fopen("excel-data/customers.csv", "a");
    fputcsv($file, array($name, $mobile, $address, $email, $coupon_number, $target_file));
    fclose($file);

    echo "<h2>🎉 धन्यवाद $name! तुमची नोंदणी पूर्ण झाली आहे. 🎉</h2>";
}
?>
