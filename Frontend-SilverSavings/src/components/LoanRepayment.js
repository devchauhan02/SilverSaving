import React, { useState } from 'react';

const LoanRepayment = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateRepayment = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const monthly = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div>
      <h2>Loan Repayment Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
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
      <button onClick={calculateRepayment}>Calculate</button>
      {monthlyPayment !== null && <h3>Monthly Payment: ₹ {monthlyPayment}</h3>}
    </div>
  );
};

export default LoanRepayment;
