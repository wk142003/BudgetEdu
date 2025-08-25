// src/pages/Disadvantages.jsx
import React from 'react';
import ChallengesGrid from '../components/disadvantages/ChallengesGrid';
import Quiz from '../components/disadvantages/Quiz';
import Navbar from '../components/BottomNav';

export default function Disadvantages() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Challenges to Budgeting
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore common challenges to adopting budgeting and discover practical solutions to overcome them.
      </p>
      <ChallengesGrid />
      <Quiz />
      <Navbar />
    </div>
  );
}