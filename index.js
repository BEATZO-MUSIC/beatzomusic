require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    clientId: process.env.DISCORD_CLIENT_ID,
    supportServerInvite: process.env.SUPPORT_SERVER_INVITE
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    clientId: process.env.DISCORD_CLIENT_ID,
    supportServerInvite: process.env.SUPPORT_SERVER_INVITE
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', '🎵 Beatzo Dashboard 🎵');
  console.log('\x1b[33m%s\x1b[0m', `🚀 Server running on port ${PORT}`);
  console.log('\x1b[36m%s\x1b[0m', '👨‍💻 Bot Developer: sanju.dev');
  console.log('\x1b[32m%s\x1b[0m', '🎨 Dashboard Developer: fallingasleep12');
});

// Dashboard Dev By Discord UserName: fallingasleep12
