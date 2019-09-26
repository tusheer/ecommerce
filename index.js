const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('game on'));
