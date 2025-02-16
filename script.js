document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("thank-you").style.display = "block";
    setTimeout(() => {
        document.getElementById("thank-you").style.display = "none";
    }, 3000);
});
