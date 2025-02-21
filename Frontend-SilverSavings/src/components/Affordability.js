import React, { useState } from 'react';

const Affordability = () => {
  const [annualIncome, setAnnualIncome] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyDebt, setMonthlyDebt] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [affordableHomePrice, setAffordableHomePrice] = useState(null);

  const calculateAffordability = () => {
    const income = parseFloat(annualIncome) / 12;
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const maxMonthlyPayment = income * 0.28 - parseFloat(monthlyDebt);
    const principal = (maxMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))) / monthlyInterestRate;
    const homePrice = principal + parseFloat(downPayment);

    setAffordableHomePrice(homePrice.toFixed(2));
  };

  return (
    <div>
      <h2>Affordability Calculator</h2>
      <input
        type="number"
        placeholder="Annual Income"
        value={annualIncome}
        onChange={(e) => setAnnualIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Down Payment"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Debt Payments"
        value={monthlyDebt}
        onChange={(e) => setMonthlyDebt(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Loan Term (Years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <button onClick={calculateAffordability}>Calculate</button>
      {affordableHomePrice !== null && <h3>Affordable Home Price: ₹ {affordableHomePrice}</h3>}
    </div>
  );
};

export default Affordability;
