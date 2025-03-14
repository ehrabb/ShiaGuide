// src/api/api.js
export const fetchQuranVerse = async (verseId) => {
    // Replace with your actual API endpoint
    const response = await fetch(`https://api.example.com/quran/verse/${verseId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};