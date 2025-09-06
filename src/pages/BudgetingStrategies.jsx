// src/pages/BudgetingStrategies.jsx
import React from 'react';
import StrategiesGrid from '../components/strategies/StrategiesGrid';
import Navbar from '../components/BottomNav';

const BudgetingStrategies = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 pt-8">
        Budgeting Strategies
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover popular budgeting methods to manage your finances effectively. Each strategy is tailored to different financial goals and lifestyles.
      </p>
      <StrategiesGrid />
      <Navbar />
    </div>
  );
};

export default BudgetingStrategies;