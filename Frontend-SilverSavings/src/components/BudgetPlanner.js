import React, { useState } from 'react';

const BudgetPlanner = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
    const totalIncome = parseFloat(income);
    const totalExpenses = parseFloat(expenses);
    const totalSavings = parseFloat(savings);

    const totalBudget = totalIncome - totalExpenses - totalSavings;
    setBudget(totalBudget.toFixed(2));
  };

  return (
    <div>
      <h2>Budget Planner</h2>
      <input
        type="number"
        placeholder="Total Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Savings"
        value={savings}
        onChange={(e) => setSavings(e.target.value)}
      />
      <button onClick={calculateBudget}>Calculate</button>
      {budget !== null && <h3>Remaining Budget: ₹ {budget}</h3>}
    </div>
  );
};

export default BudgetPlanner;
