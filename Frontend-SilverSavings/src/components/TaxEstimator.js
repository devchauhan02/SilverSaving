import React, { useState } from 'react';

const TaxEstimator = () => {
  const [income, setIncome] = useState('');
  const [taxableIncome, setTaxableIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    // Sample tax calculation logic
    // This is a placeholder, you should replace it with an actual tax calculation logic
    const taxPercentage = 0.25; // 25% flat tax rate for demonstration purposes
    const calculatedTax = parseFloat(taxableIncome) * taxPercentage;
    setTax(calculatedTax.toFixed(2));
  };

  return (
    <div>
      <h2>Tax Estimator</h2>
      <input
        type="number"
        placeholder="Total Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Taxable Income"
        value={taxableIncome}
        onChange={(e) => setTaxableIncome(e.target.value)}
      />
      <button onClick={calculateTax}>Calculate</button>
      {tax !== null && <h3>Tax Owed: ₹ {tax}</h3>}
    </div>
  );
};

export default TaxEstimator;
