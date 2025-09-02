import React from 'react';
import CardGrid from '../components/advantages/CardGrid';
import BottomNav from '../components/BottomNav'

export default function Advantages() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-gray-900 mb-8'>
                Advantages of Budgeting
            </h1>
            <CardGrid />
            <BottomNav />
        </div>
    )
}