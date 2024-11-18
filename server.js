const express = require('express');
const app = express();
const port = 3000;

app.get('/h', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
