// src/components/HadithDisplay.js
import React from 'react';
import './components.css'; // Import the CSS file

const HadithDisplay = ({ hadith }) => {
    return (
        <div className="hadith-display">
            <h3>Hadith</h3>
            <p>{hadith.text}</p>
            <p><strong>- {hadith.source}</strong></p>
        </div>
    );
};

export default HadithDisplay;