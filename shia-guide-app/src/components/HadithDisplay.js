// E:\ShiaGuide\shia-guide\src\components\HadithDisplay.js

import React, { useEffect, useState } from 'react';
import { fetchHadith } from '../api/api'; // Ensure this path is correct

const HadithDisplay = ({ bookId }) => {
    const [hadiths, setHadiths] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHadiths = async () => {
            try {
                const data = await fetchHadith(bookId);
                setHadiths(data);
            } catch (error) {
                setError("Failed to fetch Hadiths.");
                console.error("Failed to fetch Hadiths:", error);
            } finally {
                setLoading(false);
            }
        };

        if (bookId) {
            getHadiths();
        }
    }, [bookId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Hadiths from Book ID: {bookId}</h2>
            {hadiths.length > 0 ? (
                <ul>
                    {hadiths.map((hadith) => (
                        <li key={hadith.id}>{hadith.text}</li> // Adjust based on the actual Hadith structure
                    ))}
                </ul>
            ) : (
                <p>No Hadiths found.</p>
            )}
        </div>
    );
};

export default HadithDisplay;