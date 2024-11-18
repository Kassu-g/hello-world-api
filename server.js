const express = require('express');
const app = express();
const port = 3000;

app.get('/h', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/echo/:id', (req, res) => {
  const { id } = req.params;  
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
