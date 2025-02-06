const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const config = require('./config')

const app = express();
const port = 3010;

console.log(config)
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
