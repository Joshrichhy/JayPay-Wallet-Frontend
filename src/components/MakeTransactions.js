import React, { useState } from 'react';
import axios from 'axios';

const MakeTransactions = () => {
    const [amount, setAmount] = useState(0);

    const handleMakeTransaction = () => {
        // Send a request to make a transaction to the server or your API
        axios.post('/api/make-transaction', { amount }).then((response) => {
            console.log(response.data);
            // You may want to update the balance in the Home component
        });
    };

    return (
        <div>
            <h2>Make Transaction</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleMakeTransaction}>Make Transaction</button>
        </div>
    );
};

export default MakeTransactions;
