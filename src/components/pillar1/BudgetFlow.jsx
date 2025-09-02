import React, { useState } from 'react';

const BudgetFlow = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Budget Categories from list
    const budgetCategories = {
        'Household Budget': ['Mortgage/Rent', 'Utilities', 'Home Repairs'],
        'Personal Use': ['Makeup', 'Self Care', 'Clothing & Shoes'],
        'Work': ['Uniform', 'Work Equipment'],
        'Transportation': ['Public Transport', 'Private Transport'],
        'Family': ['Basic Groceries', 'Splurge Groceries', 'Subscriptions'],
        'Savings and Debt': ['Emergency Fund', 'Credit Card Debts'],
        'Medical': ['Health Insurance', 'First Aid', 'Life Insurance'],
        'Events and Fun': ['Special Meals', 'Holidays'],
    };

    // handle slider changes
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        setSelectedCategory(null);
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // close the modal
    const closeModal = () => {
        setSelectedCategory(null);
    }

    // Modal Component
    const modal = ({category, subcategories}) => (
        // inset sets all four prop (btlr) to 0
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="list-disc pl-5">
                    {subcategories.map((sub, index) => (
                        <li key={index} className="text-sm">{sub}</li>
                    ))}
                </ul>
                <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    )
    

    // Determine the frame to show based on the slider value
    const getFrameContent = () => {
        if (sliderValue < 50) {
            return (
                <div className='flex justify-center items-center h-64 transition-opacity duration-500'>
                    <div className='bg-green-200 p-8 rounded-lg flex items-center space-x-4 transform scale-100 transition-transform duration-500'>
                        <span className='text-6xl'>💰</span>
                        <p className='text-2xl font-semibold'>Income</p>
                    </div>
                </div>
            );
        } else {
            // Splitting into budget categories
            return (
                <div>
                <p className="text-center pb-2">Click on each category to see their subcategories!</p>
                <div className='grid grid-cols-4 gap-4 h-64 transition-opacity duration-500'>
                    {Object.keys(budgetCategories).map((category, index) => (
                        <div key={category} className='bg-blue-200 p-4 rounded-lg flex items-center justify-center space-x-2 transform scale-95 hover:scale-100 transition-transform duration-300 cursor-pointer'
                            onClick={() => handleCategoryClick(category)}
                            style={{animationDelay: `${index * 100}ms`}}
                        >
                            <span className='text-2xl'>💸</span>
                            <p className='text-sm font-semibold text-center'>{category}</p>
                        </div>
                    ))}
                </div>
                </div>
            );
        }
    }

    return (
        <section className="space-y-6 flex flex-col items-center justify-center">
            <h2 className='text-3xl font-bold mb-4 mx-28'>How Budgeting Works?</h2>
            <div className='max-w-4xl mx-auto'>
                {getFrameContent()}
                <input 
                    type='range' 
                    min="0" 
                    max="100" 
                    value={sliderValue} 
                    onChange={handleSliderChange} 
                    className='w-full mt-4'
                />
                <p className="text-center mt-2">
                    Slide to see how income is split into budget categories!
                </p>
                {selectedCategory && (
                    modal({
                        category: selectedCategory,
                        subcategories: budgetCategories[selectedCategory]
                    })
                )}
            </div>
        </section>
    )
};

export default BudgetFlow;