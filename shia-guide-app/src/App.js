// E:\ShiaGuide\shia-guide\src\App.js

import React, { useState } from 'react';
import QuranVerseDisplay from './components/QuranVerseDisplay'; // Ensure this path is correct
import HadithDisplay from './components/HadithDisplay'; // Ensure this path is correct
import './App.css'; // Ensure this line is present

const App = () => {
    const [verseId, setVerseId] = useState('');
    const [bookId, setBookId] = useState('');

    const handleVerseIdChange = (e) => {
        setVerseId(e.target.value);
    };

    const handleBookIdChange = (e) => {
        setBookId(e.target.value);
    };

    return (
        <div className="App">
            <h1>Islamic Texts Finder</h1>
            <div>
                <h2>Find a Quran Verse</h2>
                <input
                    type="text"
                    value={verseId}
                    onChange={handleVerseIdChange}
                    placeholder="Enter verse ID"
                />
                {verseId && <QuranVerseDisplay verseId={verseId} />}
            </div>
            <div>
                <h2>Find Hadiths</h2>
                <input
                    type="text"
                    value={bookId}
                    onChange={handleBookIdChange}
                    placeholder="Enter book ID"
                />
                {bookId && <HadithDisplay bookId={bookId} />}
            </div>
        </div>
    );
};

export default App;