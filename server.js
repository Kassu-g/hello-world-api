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
app.use(express.json());
app.post('/sum', (req, res) => {
    const { luvut } = req.body;
  
    if (!Array.isArray(luvut) || luvut.some(isNaN)) {
      return res.status(400).json({ error: 'Ei ollut numeroita.' });
    }
  
    const sum = luvut.reduce((summa, luku) => summa + luku, 0);
  
    res.json({ sum });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
