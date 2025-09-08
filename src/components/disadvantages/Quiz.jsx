// src/components/Disadvantages/Quiz.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// src/api.js or wherever you make fetch calls
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:10000";

const Quiz = () => {
  const options = [
    'Inconsistent Budgeting',
    'Lack of Clear Financial Goals',
    'Indecisiveness about Finances',
    'Shopping Impulsively',
    'No issues with budgeting',
  ];

  const [selected, setSelected] = useState('');
  const [otherInput, setOtherInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [aggregatedResults, setAggregatedResults] = useState({});
  const [otherResponses, setOtherResponses] = useState([]);

  useEffect(() => {
    if (submitted) {
      fetchResponses();
    }
  }, [submitted]);

  const fetchResponses = () => {
    axios.get(`${API_BASE}/api/other-responses`)
      .then((response) => {
        const submissions = response.data;
        const counts = {};
        options.forEach(opt => (counts[opt] = 0));
        const others = [];
        submissions.forEach(sub => {
          const opt = sub.selected;
          if (options.includes(opt)) {
            counts[opt]++;
          } else {
            others.push(opt);
          }
        });
        setAggregatedResults(counts);
        setOtherResponses(others);
      })
      .catch((error) => console.error('Error fetching responses:', error));
  };

  const handleSubmit = () => {
    let selectedOption = selected === 'Other' ? otherInput.trim() : selected;
    if (selectedOption) {
      axios.post(`${API_BASE}/api/other-responses`, { selected: selectedOption })
        .then(() => {
          setSubmitted(true);
        })
        .catch((error) => console.error('Error saving response:', error));
    }
  };

  const calculatePercentages = () => {
    const total = Object.values(aggregatedResults).reduce((a, b) => a + b, 0) || 0;
    return options.map(opt => ({
      option: opt,
      percentage: total === 0 ? 0 : (aggregatedResults[opt] / total) * 100,
    }));
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
        What are some challenges people face when budgeting?
      </h3>
      <div className="mb-4">
        {options.map((option) => (
          <label key={option} className="block mb-2">
            <input
              type="radio"
              checked={selected === option}
              onChange={() => setSelected(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <label className="block mb-2">
          <input
            type="radio"
            checked={selected === 'Other'}
            onChange={() => setSelected('Other')}
            className="mr-2"
          />
          Other
        </label>
        {selected === 'Other' && (
          <input
            type="text"
            value={otherInput}
            onChange={(e) => setOtherInput(e.target.value)}
            placeholder="Enter your challenge..."
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={!selected || (selected === 'Other' && !otherInput.trim())}
      >
        Submit
      </button>
      {submitted && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Your Selection</h4>
          <p>{selected === 'Other' ? otherInput : selected}</p>
        </div>
      )}
      {submitted && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">What Others Chose</h4>
          {calculatePercentages().map(({ option, percentage }) => (
            <div key={option} className="mb-2">
              <span>{option} ({percentage.toFixed(1)}%)</span>
              <div className="w-full bg-gray-200 rounded h-4">
                <div
                  className="bg-blue-500 h-4 rounded"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {submitted && otherResponses.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Other Challenges from Community</h4>
          <ul className="text-sm list-disc list-inside">
            {otherResponses.slice(0, 5).map((response, index) => (
              <li key={index}>{response}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;