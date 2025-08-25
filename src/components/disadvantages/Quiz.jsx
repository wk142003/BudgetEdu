import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
  const options = [
    'Inconsistent Budgeting',
    'Lack of Clear Financial Goals',
    'Indecisiveness about Finances',
    'Shopping Impulsively',
    'No issues with budgeting',
  ];

  const [selected, setSelected] = useState([]);
  const [otherInput, setOtherInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [otherResponses, setOtherResponses] = useState([]);

  // Fetch other responses on mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/other-responses')
      .then((response) => setOtherResponses(response.data))
      .catch((error) => console.error('Error fetching responses:', error));
  }, []);

  const handleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleOtherSubmit = () => {
    if (otherInput.trim()) {
      const newResponse = otherInput.trim();
      setSelected((prev) => [...prev, newResponse]);
      setOtherInput('');
      // Save to backend
      axios.post('http://localhost:5000/api/other-responses', { response: newResponse })
        .catch((error) => console.error('Error saving response:', error));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculatePercentages = () => {
    const total = selected.length || 1; // Avoid division by zero
    const counts = {};
    options.forEach((opt) => (counts[opt] = 0));
    selected.forEach((opt) => (counts[opt] = (counts[opt] || 0) + 1));
    return Object.entries(counts).map(([opt, count]) => ({
      option: opt,
      percentage: (count / total) * 100,
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
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <input
          type="text"
          value={otherInput}
          onChange={(e) => setOtherInput(e.target.value)}
          placeholder="Other challenges..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          onClick={handleOtherSubmit}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={!otherInput.trim()}
        >
          Add Other
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={selected.length === 0}
      >
        Submit
      </button>
      {submitted && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Your Results</h4>
          {calculatePercentages().map(({ option, percentage }) => (
            <div key={option} className="mb-2">
              <span>{option}: {percentage.toFixed(1)}%</span>
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
      {otherResponses.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Community Challenges</h4>
          <ul className="text-sm list-disc list-inside">
            {otherResponses.slice(0, 5).map((response, index) => (
              <li key={index}>{response.response}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;