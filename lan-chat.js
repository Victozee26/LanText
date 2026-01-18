// lan-chat.js - Simple LAN chat application
const dgram = require('dgram');

// Configuration
const PORT = 41235; // Different port from clipboard
const BROADCAST_ADDR = '255.255.255.255';

const socket = dgram.createSocket('udp4');

// Bind socket and enable broadcasting
socket.bind(PORT, () => {
    socket.setBroadcast(true);
    console.log(`LAN Chat listening on port ${PORT}`);
    console.log('Type your messages and press Enter to send to all devices on LAN');
});