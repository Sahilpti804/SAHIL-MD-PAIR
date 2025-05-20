const express = require('express');
const path = require('path');
const app = express();
const code = require('./pair');       // WhatsApp pairing routes
const qrCodeHandler = require('./qr'); // ✅ QR generator API

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

app.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, 'qr.html'));
});

// Main API routes
app.use('/code', code);
app.use('/qr.png', qrCodeHandler);  // ✅ Add this to serve QR image

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});