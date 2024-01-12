import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddFunds from './components/AddFunds';
import MakeTransaction from './components/MakeTransactions';
import LandingPage from './components/LandingPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/add-funds" element={<AddFunds/>} />
          <Route path="/make-transaction" element={<MakeTransaction/>} />
        </Routes>
      </Router>
  );
}

export default App;
