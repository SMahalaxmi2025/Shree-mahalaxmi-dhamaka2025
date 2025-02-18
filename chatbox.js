// चॅट बॉक्स उघडण्यासाठी व बंद करण्यासाठी फंक्शन
function toggleChatBox() {
  var chatbox = document.getElementById('chatbox-container');
  chatbox.style.display = (chatbox.style.display === 'block') ? 'none' : 'block';
}
