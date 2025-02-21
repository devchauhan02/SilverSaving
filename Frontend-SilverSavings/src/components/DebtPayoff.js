import React, { useState } from 'react';

const DebtPayoff = () => {
  const [debtAmount, setDebtAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [monthsToPayoff, setMonthsToPayoff] = useState(null);

  const calculateDebtPayoff = () => {
    const principal = parseFloat(debtAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const payment = parseFloat(monthlyPayment);

    const months = Math.log(payment / (payment - principal * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);

    setMonthsToPayoff(Math.ceil(months));
  };

  return (
    <div>
      <h2>Debt Payoff Calculator</h2>
      <input
        type="number"
        placeholder="Debt Amount"
        value={debtAmount}
        onChange={(e) => setDebtAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Payment"
        value={monthlyPayment}
        onChange={(e) => setMonthlyPayment(e.target.value)}
      />
      <button onClick={calculateDebtPayoff}>Calculate</button>
      {monthsToPayoff !== null && <h3>Months to Payoff: ₹ {monthsToPayoff}</h3>}
    </div>
  );
};

export default DebtPayoff;
