// src/api/api.js

import axios from 'axios';

// Create an Axios instance for API requests
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your actual API base URL
    timeout: 40000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Function to fetch a specific Quran verse by its ID
export const fetchQuranVerse = async (verseId) => {
    try {
        const response = await apiClient.get(`/quran/verse/${verseId}`); // Adjust the endpoint as needed
        if (response.status !== 200) {
            throw new Error('Failed to fetch data');
        }
        return response.data; // Assuming the API returns the verse data directly
    } catch (error) {
        console.error('Error fetching Quran verse:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Function to fetch Hadiths by book ID
export const fetchHadiths = async (bookId) => {
    try {
        const response = await apiClient.get(`/hadith/book/${bookId}`); // Adjust the endpoint as needed
        if (response.status !== 200) {
            throw new Error('Failed to fetch data');
        }
        return response.data; // Assuming the API returns the Hadith data directly
    } catch (error) {
        console.error('Error fetching Hadiths:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

export default apiClient;