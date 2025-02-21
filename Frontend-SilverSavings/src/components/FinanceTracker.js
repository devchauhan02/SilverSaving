// src/components/FinanceTracker.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinanceTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  async function renderUserData() {
    const userID = localStorage.getItem("userID");
    const url =  "http://localhost:8000" + "/users/" + userID; 
    const response = await axios.get(url);
    const user = response.data.user; 

    setTransactions(user.expenses); 
  }

  useEffect(() => {
    renderUserData(); 
  }, [])

  const addTransaction = async (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
      userID: localStorage.getItem("userID"),
    };

    const url =  "http://localhost:8000" + "/expenses"

    try {
      const response = await axios.post(url, newTransaction)
      setTransactions([response.data.expense, ...transactions]);
      setText('');
      setAmount('');
    } catch(err) {
      alert(err.message); 
    }

    
  };

  const deleteTransaction = async (id) => {
    const url =  "http://localhost:8000" + "/expenses/" + id;
    try {
      await axios.delete(url); 
      setTransactions(transactions.filter(transaction => transaction._id !== id));
    } catch(err) {
      alert(err.message); 
    }
  };

  const calculateBalance = () => {
    const amounts = transactions.map(transaction => transaction.amount);
    return amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  };

  return (
    <div className="container">
      <h1 className='header'>Finance Tracker</h1>
      
      <div>
        <h1 >Your Balance</h1>
        <h1 className='balance'>₹ {calculateBalance()}</h1>
      </div>
      
      <div>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (
            <li key={transaction._id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text} 
              <span>{transaction.amount < 0 ? '-' : '+'}₹ {Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Add New Transaction</h3>
        <form onSubmit={addTransaction}>
          <div className="form-control">
            <label htmlFor="text">Title</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </div>
  );
};

export default FinanceTracker;
