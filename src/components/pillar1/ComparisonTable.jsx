import React from 'react';

const ComparisonTable = () => {
  // Data from your provided table
  const comparisonData = [
    { category: 'Income', preplanned: '-', withBudget: '$5000', noBudget: '$5000' },
    { category: 'Household Budget', preplanned: '$1500', withBudget: '$1350', noBudget: '$1400' },
    { category: 'Personal Use', preplanned: '$400', withBudget: '$300', noBudget: '$450' },
    { category: 'Work', preplanned: '$100', withBudget: '$100', noBudget: '$100' },
    { category: 'Transportation', preplanned: '$120', withBudget: '$120', noBudget: '$120' },
    { category: 'Family', preplanned: '$400', withBudget: '$350', noBudget: '$400' },
    { category: 'Events and Fun', preplanned: '$100', withBudget: '$0', noBudget: '$200' },
    { category: 'Medical', preplanned: '$150', withBudget: '$100', noBudget: '$100' },
    { category: 'Savings and Debt', preplanned: '$1000', withBudget: '$1000', noBudget: '$1200' },
    { category: 'Remaining', preplanned: '-', withBudget: '$1680', noBudget: '$1030' },
  ];

  return (
    <section className="py-8 px-4 bg-white shadow-md rounded-lg my-8">
      <h2 className="text-3xl font-bold text-center mb-4">Budget vs. No Budget</h2>
      <p className="text-center text-gray-600 mb-6">
        See how budgeting impacts your finances by comparing planned and actual spending.
      </p>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Category</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">Preplanned Budget</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">With Budget</th>
              <th className="px-4 py-2 text-left text-gray-700 font-semibold">No Budget</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={row.category}
                className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
              >
                <td className="px-4 py-2 text-gray-800">{row.category}</td>
                <td className="px-4 py-2 text-gray-800">{row.preplanned}</td>
                <td
                  className={`px-4 py-2 ${
                    row.preplanned !== '-' && row.withBudget < row.preplanned
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-800'
                  }`}
                >
                  {row.withBudget}
                </td>
                <td
                  className={`px-4 py-2 ${
                    row.preplanned !== '-' && row.noBudget > row.preplanned
                      ? 'text-red-600 font-semibold'
                      : 'text-gray-800'
                  }`}
                >
                  {row.noBudget}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;