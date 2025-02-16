document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    fetch("server.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: name=${name}&mobile=${mobile}&address=${address}
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("त्रुटी:", error));
});
