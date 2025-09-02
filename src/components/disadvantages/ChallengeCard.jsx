import React from 'react';

const ChallengeCard = ({ title, explanation, example, solutions }) => {
  return (
    // colours for consistency with website's blue theme, max-w-xs ensures card size, h-auto adapts to content
    <div className="w-full max-w-xs h-auto bg-blue-100 rounded-lg shadow-md p-6 flex flex-col items-center text-gray-800">
      <h3 className="text-xl font-bold text-blue-600 mb-4">{title}</h3>
      <p className="text-sm mb-4">{explanation}</p>
      <p className="text-sm italic mb-4">{example}</p>
      <ul className="text-sm list-disc list-inside">
        {solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeCard;