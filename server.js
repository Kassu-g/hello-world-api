const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/echo/:id', (req, res) => {
  const { id } = req.params;  
  res.json({ id });
});
app.use(express.json());
app.post('/sum', (req, res) => {
    const { numbers } = req.body;
  
  
    const sum = numbers.reduce((summa, luku) => summa + luku, 0);
  
    res.json({ sum });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
