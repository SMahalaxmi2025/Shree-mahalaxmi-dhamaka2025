CREATE DATABASE mahalaxmi_dhamaka;
USE mahalaxmi_dhamaka;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(15),
    address TEXT
);
