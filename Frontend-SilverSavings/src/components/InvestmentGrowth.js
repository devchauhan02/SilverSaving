import React, { useState } from 'react';

const InvestmentGrowth = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [years, setYears] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateGrowth = () => {
    const months = years * 12;
    const monthlyReturn = (annualReturn / 100) / 12;
    let value = parseFloat(initialInvestment);
    for (let i = 0; i < months; i++) {
      value = (value + parseFloat(monthlyContribution)) * (1 + monthlyReturn);
    }
    setFutureValue(value.toFixed(2));
  };

  return (
    <div>
      <h2>Investment Growth Calculator</h2>
      <input
        type="number"
        placeholder="Initial Investment"
        value={initialInvestment}
        onChange={(e) => setInitialInvestment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Contribution"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Return (%)"
        value={annualReturn}
        onChange={(e) => setAnnualReturn(e.target.value)}
      />
      <button onClick={calculateGrowth}>Calculate</button>
      {futureValue !== null && <h3>Future Value: ₹ {futureValue}</h3>}
    </div>
  );
};

export default InvestmentGrowth;
