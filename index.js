// Real-Time Chat Message Logger

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'chat_log.txt');

// Simulated users
const users = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

// Simulated chat messages
const messages = [
    'Hello, how are you?',
    'What are you up to?',
    'That sounds great!',
    'Let's meet up later.',
    'I totally agree with you.',
    'Have a great day!',
    'See you soon!',
    'What time is the meeting?',
    'I need some help with this.',
    'Can you send me the file?'
];



// Function to log chat messages
function logChatMessage(user, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${user}: ${message}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Function to generate a random chat message
function getRandomChatMessage() {
    const user = users[Math.floor(Math.random() * users.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];
    return { user, message };
}

// Function to log a random chat message
function logRandomChat() {
    const chat = getRandomChatMessage();
    logChatMessage(chat.user, chat.message);
    console.log(`Chat - ${chat.user}: ${chat.message}`);
}

// Schedule chat message logging
setInterval(logRandomChat, 3000); // Every 3 seconds

// Initial log message
logChatMessage('SYSTEM', 'Chat Logger started.');
console.log('Chat Logger started.');

// Stop after 1 minute
setTimeout(() => {
    logChatMessage('SYSTEM', 'Chat Logger stopped.');
    console.log('Chat Logger stopped.');
    process.exit(0);
}, 60000);
