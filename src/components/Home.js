import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        // Fetch balance from the server or your API
        axios.get('/api/balance').then((response) => {
            setBalance(response.data.balance);
        });
    }, []);

    return (
        <div>
            <h1>Your E-Wallet</h1>
            <p>Current Balance: ${balance}</p>
        </div>
    );
};

export default Home;
