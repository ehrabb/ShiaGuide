// src/components/HadithDisplay.js
import React, { useEffect, useState } from 'react';
import { fetchHadith } from '../api/api'; // Ensure this path is correct

const HadithDisplay = ({ hadithId }) => {
    const [hadith, setHadith] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHadith = async () => {
            try {
                const fetchedHadith = await fetchHadith(hadithId);
                setHadith(fetchedHadith);
            } catch (err) {
                setError('Failed to fetch hadith');
                console.error(err);
            }
        };
        getHadith();
    }, [hadithId]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {hadith ? <p>{hadith.text}</p> : <p>Loading...</p>}
        </div>
    );
};

export default HadithDisplay;