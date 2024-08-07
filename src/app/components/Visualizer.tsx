'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { properties } from "../dummyData"; // Import the properties data

export default function Visualizer() {
    const [minPrice, setMinPrice] = useState(100); // Initialize minPrice state
    const [maxPrice, setMaxPrice] = useState(2000); // Initialize maxPrice state

    // Calculate min and max prices from properties
    const allPrices = properties.map(property => property.price);
    const minPropertyPrice = Math.min(...allPrices);
    const maxPropertyPrice = Math.max(...allPrices);

    // Handle price change
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setMinPrice(newValue);
        // You can also setMaxPrice if needed
    };

    return (
        <div className="relative m-5">
            <div className="font-semibold text-lg">
                <h1>Price range</h1>
            </div>
            {/* Add visualizer with vertical blue bars above input range */}
            <div className="flex justify-between items-end h-20 mx-0.5 mt-5">
                {[...Array(28)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-blue-500 rounded-full"
                        style={{ height: `${(index + 1) * (100 / 28)}%`, width: '4px' }}
                    />
                ))}
            </div>
            <div className="relative mb-6">
                <label htmlFor="labels-range-input" className="sr-only">
                    Select price range:
                </label>
                
                <input
                    id="labels-range-input"
                    type="range"
                    value={minPrice}
                    min={minPropertyPrice}
                    max={maxPropertyPrice}
                    className="w-full h-1 bg-blue-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 range-input"
                    aria-label="Select price range"
                    onChange={handlePriceChange}
                />
                <style jsx>{`
                    input[type=range]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        background-color: #3b82f6; /* Blue color */
                        cursor: pointer;
                        border: 2px solid #a5b4fc; /* Lighter blue outline */
                    }

                    input[type=range]::-moz-range-thumb {
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                        background-color: #3b82f6; /* Blue color */
                        cursor: pointer;
                        border: 2px solid #a5b4fc; /* Lighter blue outline */
                    }
                `}</style>
                {/* Display fixed min and max values */}
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 -bottom-6">
                    ${minPropertyPrice}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6">
                    ${maxPropertyPrice}
                </span>
            </div>
        </div>
    );
}
