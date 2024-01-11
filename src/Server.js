const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Mock data (you might want to use a database in a real application)
let balance = 1000;

app.get('/api/balance', (req, res) => {
    res.json({ balance });
});

app.post('/api/add-funds', (req, res) => {
    const { amount } = req.body;
    balance += parseFloat(amount);
    res.json({ message: 'Funds added successfully', balance });
});

app.post('/api/make-transaction', (req, res) => {
    const { amount } = req.body;
    if (balance >= parseFloat(amount)) {
        balance -= parseFloat(amount);
        res.json({ message: 'Transaction successful', balance });
    } else {
        res.status(400).json({ message: 'Insufficient funds' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
