const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Plant database with special replies
const plantDB = {
  rose: "🌹 Rose care: Water daily, sunlight 4-6 hours, avoid overwatering.",
  tomato: "🍅 Tomato care: Needs well-drained soil, full sun, watch for pests.",
  mango: "🥭 Mango care: Water weekly, prune dead leaves, full sunlight.",
  banana: "🍌 Banana care: Keep soil moist, protect from frost, needs sunlight."
};

// General fallback replies for conversation
const fallbackReplies = [
  "Interesting! Tell me more 😄",
  "Hmm, can you explain a bit?",
  "I see! What else?",
  "Cool! Keep chatting with me.",
  "I am learning new things every day!"
];

// Add message to chat
function appendMessage(text, sender="bot") {
  const div = document.createElement("div");
  div.className = `bubble ${sender}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Chatbot response logic
function getBotReply(msg) {
  msg = msg.toLowerCase();

  // Check plant database
  for (let plant in plantDB) {
    if (msg.includes(plant)) return plantDB[plant];
  }

  // General chat reply
  return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
}

// Send message function
function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  appendMessage(msg, "user");
  userInput.value = "";

  // Simulate typing delay
  setTimeout(() => {
    const reply = getBotReply(msg);
    appendMessage(reply, "bot");
  }, 400);
}

// Send button click
sendBtn.addEventListener("click", sendMessage);

// Enter key to send
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
