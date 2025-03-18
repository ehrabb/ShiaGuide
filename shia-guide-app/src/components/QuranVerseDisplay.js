// src/components/QuranVerseDisplay.js
import React from 'react';
import './components.css'; // Import the CSS file

const QuranVerseDisplay = ({ verse }) => {
    return (
        <div className="quran-verse-display">
            <h3>Quran Verse</h3>
            <p>{verse.text}</p>
            <p><strong>- Surah {verse.surah}, Ayah {verse.ayah}</strong></p>
        </div>
    );
};

export default QuranVerseDisplay;