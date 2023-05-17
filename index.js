const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (req, res) => {
  res.send(`Example app listening at http://localhost:${port}`);
});
