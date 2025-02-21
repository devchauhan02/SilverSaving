import React, { useState } from 'react';

const RetirementSavings = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    const years = retirementAge - currentAge;
    const monthlyReturn = (annualReturn / 100) / 12;
    let futureValue = 0;
    for (let i = 0; i < years * 12; i++) {
      futureValue = (futureValue + parseFloat(monthlySavings)) * (1 + monthlyReturn);
    }
    setSavings(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2>Retirement Savings Calculator</h2>
      <input
        type="number"
        placeholder="Current Age"
        value={currentAge}
        onChange={(e) => setCurrentAge(e.target.value)}
      />
      <input
        type="number"
        placeholder="Retirement Age"
        value={retirementAge}
        onChange={(e) => setRetirementAge(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Savings"
        value={monthlySavings}
        onChange={(e) => setMonthlySavings(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Return (%)"
        value={annualReturn}
        onChange={(e) => setAnnualReturn(e.target.value)}
      />
      <button onClick={calculateSavings}>Calculate</button>
      {savings !== null && <h3>Estimated Savings: ₹ {savings}</h3>}
    </div>
  );
};

export default RetirementSavings;
