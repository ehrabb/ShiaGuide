// src/App.js

import React, { useState } from 'react';
import QuranVerseDisplay from './components/QuranVerseDisplay';
import HadithDisplay from './components/HadithDisplay';
import './App.css';

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