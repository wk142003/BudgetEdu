import React, { useState } from 'react';
import CardFlip from './CardFlip';

const CardGrid = () => {
    const categories = [
        { category: 'Financial Security', details: ['Emergency Funds'] },
        { category: 'Goal Achievement', details: ['Steady saving progress towards big ticket items'] },
        { category: 'Awareness', details: ['Control Over Finances', 'Spend only what one can afford'] },
        { category: 'Peace of Mind', details: ['Sufficient money to tide through tough times', 'Less Conflict and Stress over money (better emotional well-being)'] },
    ];

    // initialised: none of them are flipped to begin with
    const [flippedStates, setFlippedStates] = useState(Array(categories.length).fill(false));

    const handleFlip = (index) => {
        // used to create a shallow copy of the flippedStates array (depth of 1 anyway)
        const newFlippedStates = [...flippedStates];
        newFlippedStates[index] = !newFlippedStates[index];
        setFlippedStates(newFlippedStates);
    };

    return (
        <div className="grid grid-cols-4 gap-6 w-full max-w-screen-xl">
            {categories.map((item, index) => (
                <CardFlip
                    key={index}
                    category={item.category}
                    details={item.details}
                    isFlipped={flippedStates[index]}
                    onFlip={() => handleFlip(index)}
                />
            ))}
        </div>
    );
}

export default CardGrid