// src/App.js
import React, { useState } from 'react';
import HadithDisplay from './components/HadithDisplay';
import Pagination from './components/Pagination';
import QuranVerseDisplay from './components/QuranVerseDisplay';

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example total pages

    const hadith = { text: "The best among you are those who have the best manners and character.", source: "Bukhari" };
    const verse = { text: "Indeed, Allah is with the patient.", surah: "2", ayah: "153" };

    return (
        <div>
            <HadithDisplay hadith={hadith} />
            <QuranVerseDisplay verse={verse} />
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        </div>
    );
};

export default App;