const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    hello: 'and welcome',
    to: 'SequoianArt!'
  });
});

app.listen(5000);
