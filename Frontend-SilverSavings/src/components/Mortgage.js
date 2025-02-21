import React, { useState } from 'react';

const Mortgage = () => {
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const monthly = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <input
        type="number"
        placeholder="Home Price"
        value={homePrice}
        onChange={(e) => setHomePrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Down Payment"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Loan Term (Years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <button onClick={calculateMortgage}>Calculate</button>
      {monthlyPayment !== null && <h3>Monthly Payment: ₹ {monthlyPayment}</h3>}
    </div>
  );
};

export default Mortgage;
