const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b),
  });
  console.log(result);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});
