// App.js
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import RetirementSavings from './components/RetirementSavings';
import InvestmentGrowth from './components/InvestmentGrowth';
import LoanRepayment from './components/LoanRepayment';
import Mortgage from './components/Mortgage';
import Affordability from './components/Affordability';
import DebtPayoff from './components/DebtPayoff';
import SavingsGoal from './components/SavingsGoal';
import EmergencyFund from './components/EmergencyFund';
import CollegeSavings from './components/CollegeSavings';
import TaxEstimator from './components/TaxEstimator';
import BudgetPlanner from './components/BudgetPlanner';

const App = () => {
  const [activeCalculator, setActiveCalculator] = useState('RetirementSavings');

  return (
    <div className="App">
      <header>
        <h1>Silver Savings</h1>
        <nav>
          <button onClick={() => setActiveCalculator('RetirementSavings')}>Retirement Savings</button>
          <button onClick={() => setActiveCalculator('InvestmentGrowth')}>Investment Growth</button>
          <button onClick={() => setActiveCalculator('LoanRepayment')}>Loan Repayment</button>
          <button onClick={() => setActiveCalculator('Mortgage')}>Mortgage</button>
          <button onClick={() => setActiveCalculator('Affordability')}>Affordability</button>
          <button onClick={() => setActiveCalculator('DebtPayoff')}>Debt Payoff</button>
          <button onClick={() => setActiveCalculator('SavingsGoal')}>Savings Goal</button>
          <button onClick={() => setActiveCalculator('EmergencyFund')}>Emergency Fund</button>
          <button onClick={() => setActiveCalculator('CollegeSavings')}>College Savings</button>
          <button onClick={() => setActiveCalculator('TaxEstimator')}>Tax Estimator</button>
          <button onClick={() => setActiveCalculator('BudgetPlanner')}>Budget Planner</button>
        </nav>
      </header>
      <main>
        {activeCalculator === 'RetirementSavings' && <RetirementSavings />}
        {activeCalculator === 'InvestmentGrowth' && <InvestmentGrowth />}
        {activeCalculator === 'LoanRepayment' && <LoanRepayment />}
        {activeCalculator === 'Mortgage' && <Mortgage />}
        {activeCalculator === 'Affordability' && <Affordability />}
        {activeCalculator === 'DebtPayoff' && <DebtPayoff />}
        {activeCalculator === 'SavingsGoal' && <SavingsGoal />}
        {activeCalculator === 'EmergencyFund' && <EmergencyFund />}
        {activeCalculator === 'CollegeSavings' && <CollegeSavings />}
        {activeCalculator === 'TaxEstimator' && <TaxEstimator />}
        {activeCalculator === 'BudgetPlanner' && <BudgetPlanner />}
      </main>
    </div>
  );
};

export default App;
