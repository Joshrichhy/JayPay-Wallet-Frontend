import React, { useState } from 'react';
import axios from 'axios';

const AddFunds = () => {
    const [amount, setAmount] = useState(0);

    const handleAddFunds = () => {
        // Send a request to add funds to the server or your API
        axios.post('/api/add-funds', { amount }).then((response) => {
            console.log(response.data);
            // You may want to update the balance in the Home component
        });
    };

    return (
        <div>
            <h2>Add Funds</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAddFunds}>Add Funds</button>
        </div>
    );
};

export default AddFunds;
