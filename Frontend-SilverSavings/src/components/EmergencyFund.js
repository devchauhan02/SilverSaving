import React, { useState } from 'react';

const EmergencyFund = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [months, setMonths] = useState('');
  const [fundAmount, setFundAmount] = useState(null);

  const calculateEmergencyFund = () => {
    const expenses = parseFloat(monthlyExpenses);
    const requiredMonths = parseFloat(months);

    const totalFund = expenses * requiredMonths;

    setFundAmount(totalFund.toFixed(2));
  };

  return (
    <div>
      <h2>Emergency Fund Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Expenses"
        value={monthlyExpenses}
        onChange={(e) => setMonthlyExpenses(e.target.value)}
      />
      <input
        type="number"
        placeholder="Months to Cover"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
      />
      <button onClick={calculateEmergencyFund}>Calculate</button>
      {fundAmount !== null && <h3>Emergency Fund Needed: ₹ {fundAmount}</h3>}
    </div>
  );
};

export default EmergencyFund;
