// src/components/Filter.js
import React from 'react';

const Filter = ({ categories, onFilterChange }) => {
    return (
        <div>
            <h3>Filter by Category</h3>
            {categories.map((category) => (
                <label key={category}>
                    <input
                        type="checkbox"
                        value={category}
                        onChange={(e) => onFilterChange(category, e.target.checked)} // Call the function here
                    />
                    {category}
                </label>
            ))}
        </div>
    );
};

export default Filter;