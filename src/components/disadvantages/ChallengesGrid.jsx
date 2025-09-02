import React from 'react';
import ChallengeCard from './ChallengeCard';

const ChallengesGrid = () => {
  const challenges = [
    {
      title: 'Inconsistent Budgeting',
      explanation: 'Budgeting can feel time-consuming and labor-intensive, leading to inconsistent tracking and financial oversights.',
      example: 'Sarah starts a budget but skips updating it during busy weeks, causing her to overspend on dining out.',
      solutions: [
        'Use apps like YNAB or Mint to automate tracking and reduce time spent.',
        'Schedule a quick 15-minute weekly review to stay on top of your budget.',
      ],
    },
    {
      title: 'Lack of Clear Financial Goals',
      explanation: 'Without defined goals, budgeting can seem pointless, reducing motivation to stick with it.',
      example: 'John wants to save but doesn’t know for what, so he abandons budgeting after a month.',
      solutions: [
        'Set small, achievable goals, like saving $500 for an emergency fund.',
        'Use budgeting apps with goal-tracking features or consult a financial planner.',
      ],
    },
    {
      title: 'Indecisiveness about Finances',
      explanation: 'Uncertainty about budget allocations can paralyze decision-making and halt progress.',
      example: 'Emma hesitates to set a grocery budget, unsure if $200 is too much or too little, and stops budgeting.',
      solutions: [
        'Try the 50/30/20 rule: 50% needs, 30% wants, 20% savings/debt repayment.',
        'Start with a flexible budget for one category and adjust as you gain confidence.',
      ],
    },
    {
      title: 'Shopping Impulsively',
      explanation: 'Impulse purchases can quickly derail a budget, leading to financial stress.',
      example: 'Mike sees a sale on electronics and buys a gadget he doesn’t need, exceeding his monthly budget.',
      solutions: [
        'Adopt a 24-hour rule: wait a day before making non-essential purchases.',
        'Allocate a small “fun fund” in your budget for guilt-free spending.',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          title={challenge.title}
          explanation={challenge.explanation}
          example={challenge.example}
          solutions={challenge.solutions}
        />
      ))}
    </div>
  );
};

export default ChallengesGrid;