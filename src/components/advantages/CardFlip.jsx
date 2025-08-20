// create a card flip holder
import React from "react";

const CardFlip = ({category, details, isFlipped, onFlip}) => {
    return (
        <div
            // applies css 3d perspective to create depth effect for flip animation
            // cursor-pointer: changes to pointer on hover (indicates clickable)
            className="w-full max-w-xs h-64 perspective-1000 cursor-pointer"
            // attaches onFlip callback to toggle the card's flip state when clicked
            onClick={onFlip}
        >
            {/*Inner container that rotates to show either the front or back of card*/}
            <div
                // transition transorm duration 500 applies a smooth 500ms transition to changes 
                // transform-style: child elements rendered in 3d space, enables flip effect
                // isflipped conditional: condiitionally apply tailwind to rotate the container 180 degrees around the Y axis when isFlipped is true, showing the back side
                className={`relative w-full h-full transition-transform transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            >
                {/* Front */}
                <div className="absolute w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center rounded-lg shadow-md backface-hidden">
                    <h2 className="text-2xl font-bold text-center">{category}</h2>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-blue-600 text-white flex flex-col justify-center items-center rounded-lg shadow-md backface-hidden p-4">
                    {/*list-disc: uses bullet points for the list, list-inside: places the bullet points in the list area*/}
                    <ul className="text-lg list-disc list-inside text-center">
                        {details.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardFlip;