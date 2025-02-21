import React, { useState } from 'react';

const CollegeSavings = () => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [years, setYears] = useState('');
  const [annualContribution, setAnnualContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [collegeCost, setCollegeCost] = useState('');
  const [totalSavings, setTotalSavings] = useState(null);

  const calculateCollegeSavings = () => {
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(years) * 12;
    const monthlyContribution = parseFloat(annualContribution) / 12;

    let futureValue = parseFloat(currentSavings);
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + monthlyContribution) * (1 + monthlyInterestRate);
    }

    setTotalSavings(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2>College Savings Calculator</h2>
      <input
        type="number"
        placeholder="Current Savings"
        value={currentSavings}
        onChange={(e) => setCurrentSavings(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years to Save"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Contribution"
        value={annualContribution}
        onChange={(e) => setAnnualContribution(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="College Cost"
        value={collegeCost}
        onChange={(e) => setCollegeCost(e.target.value)}
      />
      <button onClick={calculateCollegeSavings}>Calculate</button>
      {totalSavings !== null && <h3>Total Savings Needed: ₹ {totalSavings}</h3>}
    </div>
  );
};

export default CollegeSavings;
