const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public')); 

app.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sum = a + b;
    res.send(`The sum is: ${sum}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
