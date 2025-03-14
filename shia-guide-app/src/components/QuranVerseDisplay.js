// E:\ShiaGuide\shia-guide\src\components\QuranVerseDisplay.js

import React, { useEffect, useState } from 'react';
import { fetchQuranVerse } from '../api/api'; // Ensure this path is correct

const QuranVerseDisplay = ({ verseId }) => {
    const [verse, setVerse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getVerse = async () => {
            try {
                const data = await fetchQuranVerse(verseId);
                setVerse(data);
            } catch (error) {
                setError("Failed to fetch verse.");
                console.error("Failed to fetch verse:", error);
            } finally {
                setLoading(false);
            }
        };

        if (verseId) {
            getVerse();
        }
    }, [verseId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Quran Verse</h2>
            {verse ? (
                <div>
                    <p><strong>Arabic:</strong> {verse.text}</p>
                    <p><strong>English Translation:</strong> {verse.englishTranslation}</p>
                    <p><strong>Urdu Translation:</strong> {verse.urduTranslation}</p>
                </div>
            ) : (
                <p>No verse found.</p>
            )}
        </div>
    );
};

export default QuranVerseDisplay;