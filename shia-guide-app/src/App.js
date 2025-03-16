// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import QuranVerseDisplay from './components/QuranVerseDisplay';
import HadithDisplay from './components/HadithDisplay';
import Filter from './components/Filter'; // Import the Filter component
import Pagination from './components/Pagination'; // Import the Pagination component
import { fetchSearchResults } from './api/api'; // Ensure this path is correct

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10; // Adjust as needed

    const categories = ['Quran', 'Hadith', 'History', 'Fiqh']; // Example categories

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null); // Reset error state before new search
        try {
            const results = await fetchSearchResults(query);
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching search results:', error);
            setError('Failed to fetch search results. Please try again.'); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    const handleFilterChange = (category, isChecked) => {
        if (isChecked) {
            setSelectedCategories((prev) => [...prev, category]);
        } else {
            setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
        }
    };

    // Filter search results based on selected categories
    const filteredResults = searchResults.filter((result) => {
        return selectedCategories.length === 0 || selectedCategories.includes(result.category);
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
    const paginatedResults = filteredResults.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    return (
        <div>
            <h1>ShiaGuide</h1>
            <SearchBar onSearch={handleSearch} />
            <Filter categories={categories} onFilterChange={handleFilterChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            {loading ? (
                <p>Loading...</p> // Show loading message
            ) : filteredResults.length === 0 ? (
                <p>No results found.</p> // Show no results message
            ) : (
                <>
                    <QuranVerseDisplay results={paginatedResults} />
                    <HadithDisplay results={paginatedResults} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </>
            )}
        </div>
    );
};

export default App;