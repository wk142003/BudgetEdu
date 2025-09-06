// takes in the data (strategy, explanation, scenario, example) and format it for presentation
import React from "react";

const strategyCard = ({strategy, explanation, scenario, example}) => {
    return (
        /* mb-4 to prevent the columns to appear as if they are sticking tgt */
        <div className="w-full max-w-xs h-auto p-4 rounded-lg shadow-md bg-blue-100 text-gray-800 flex flex-col mb-4">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">{strategy}</h3>
            <h4 className="text-sm font-semibold text-blue-600">Explanation</h4>
            <p className="text-sm mb-4">{explanation}</p>
            <h4 className="text-sm font-semibold text-blue-600">Scenario</h4>
            <p className="text-sm mb-4">{scenario}</p>
            <h4 className="text-sm font-semibold text-blue-600">Example</h4>
            <p className="text-sm italic">{example}</p>
        </div>
    )
}

export default strategyCard;