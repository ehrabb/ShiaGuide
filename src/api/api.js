// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import QuranVerseDisplay from './components/QuranVerseDisplay';
import HadithDisplay from './components/HadithDisplay';
import Filter from './components/Filter'; // Import the Filter component
import { fetchSearchResults } from './api';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSearch = async (query) => {
        const results = await fetchSearchResults(query);
        setSearchResults(results);
    };

    const handleFilterChange = (category, isChecked) => {
        if (isChecked) {
            setSelectedCategories((prev) => [...prev, category]);
        } else {
            setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
        }
    };

    // Example categories (you can modify these based on your data)
    const categories = ['Quran', 'Hadith', 'History', 'Fiqh'];

    // Filter search results based on selected categories
    const filteredResults = searchResults.filter((result) => {
        // Assuming each result has a category property
        return selectedCategories.length === 0 || selectedCategories.includes(result.category);
    });

    return (
        <div>
            <h1>ShiaGuide</h1>
            <SearchBar onSearch={handleSearch} />
            <Filter categories={categories} onFilterChange={handleFilterChange} /> {/* Ensure this is used */}
            <QuranVerseDisplay results={filteredResults} />
            <HadithDisplay results={filteredResults} />
        </div>
    );
};

export default App;