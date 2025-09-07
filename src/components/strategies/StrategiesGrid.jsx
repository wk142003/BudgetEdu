// src/components/BudgetingStrategies/StrategiesGrid.jsx
import React from 'react';
import StrategyCard from './StrategyCard';
import strategies from './StrategiesData';

const StrategiesGrid = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex row-span-4 gap-6 justify-center">
        {strategies.map((strategy, index) => (
          <StrategyCard
            key={index}
            strategy={strategy.strategy}
            explanation={strategy.explanation}
            scenario={strategy.scenario}
            example={strategy.example}
          />
        ))}
      </div>
    </div>
  );
};

export default StrategiesGrid;