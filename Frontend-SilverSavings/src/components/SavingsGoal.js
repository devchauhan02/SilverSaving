import React, { useState } from 'react';

const SavingsGoal = () => {
  const [goalAmount, setGoalAmount] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateSavingsGoal = () => {
    const months = parseFloat(years) * 12;
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    let futureValue = parseFloat(currentSavings);

    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + parseFloat(monthlyContribution)) * (1 + monthlyInterestRate);
    }
    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2>Savings Goal Calculator</h2>
      <input
        type="number"
        placeholder="Goal Amount"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Current Savings"
        value={currentSavings}
        onChange={(e) => setCurrentSavings(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monthly Contribution"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Years to Save"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <button onClick={calculateSavingsGoal}>Calculate</button>
      {futureValue !== null && <h3>Future Value: ₹ {futureValue}</h3>}
    </div>
  );
};

export default SavingsGoal;
