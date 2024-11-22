document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const message = document.getElementById('message').value;
    const chatBox = document.getElementById('chat-box');
  
    // Append the message to the chat box
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Clear input field
    document.getElementById('message').value = '';
  
    // Send message to server
    fetch('chat.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(response => response.json())
      .then(data => {
        const replyElement = document.createElement('div');
        replyElement.className = 'message';
        replyElement.textContent = data.reply;
        chatBox.appendChild(replyElement);
  
        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
      });
  });