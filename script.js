function openForm() {
    document.getElementById("bookingForm").style.display = "block";
}

document.getElementById("couponForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("✅ तुमची माहिती यशस्वीरीत्या सबमिट झाली! कृपया WhatsApp वर संपर्क साधा.");
});
/* चॅट बॉक्स बटन */
.chatbox-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
}

.chatbox-button button {
  background-color: #f0a500;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.chatbox-button button:hover {
  background-color: #f08000;
}

/* चॅट बॉक्स कंटेनर */
.chatbox-container {
  display: none;
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.chatbox-header {
  background-color: #f0a500;
  padding: 10px;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatbox-body {
  padding: 10px;
  overflow-y: auto;
  height: 250px;
}

.chatbox-msg {
  margin-bottom: 10px;
}

.chatbox-footer {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.chatbox-footer textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.chatbox-footer button {
  margin-top: 10px;
  background-color: #f0a500;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.chatbox-footer button:hover {
  background-color: #f08000;
}
