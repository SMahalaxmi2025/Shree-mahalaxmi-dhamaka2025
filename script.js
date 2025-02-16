Javascript
document.addEventListener("DOMContentLoaded", function() {
    
    // पेमेंट QR कोड क्लिक केल्यावर अलर्ट
    document.querySelector("#payment img").addEventListener("click", function() {
        alert("QR कोड स्कॅन करून पेमेंट करा. ✅");
    });

    // फॉर्म सबमिशन इव्हेंट
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // फॉर्म Refresh होणार नाही
        
        // Success मेसेज दाखवा
        alert("✅ तुमची नोंदणी यशस्वी झाली. कृपया तुमच्या WhatsApp वर पावती तपासा!");
        
        // फॉर्म रिसेट करा
        this.reset();
    });

    // डायरेक्ट कॉल बटण
    document.querySelector(".btn-call").addEventListener("click", function() {
        window.location.href = "tel:8888546042";
    });

    // सर्व सोशल मीडिया बटन्स Dynamic बनवा
    document.querySelectorAll(".social-buttons a").forEach(function(button) {
        button.addEventListener("click", function() {
            alert("🚀 आपण " + this.innerText + " वर जात आहात...");
        });
    });

});
