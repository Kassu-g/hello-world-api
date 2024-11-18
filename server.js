const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

app.get('/echo/:id', (req, res) => {
  const { huuto } = req.params;  
  res.json({ huuto });
});
app.use(express.json());
app.post('/sum', (req, res) => {
    const { luvut } = req.body;
  
  
    const sum = luvut.reduce((summa, luku) => summa + luku, 0);
  
    res.json({ sum });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
