import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { ecoscoperloader } from '../assets/images/loader'; // Lottie JSON for loader

const quotes = [
    "Welcome to EcoScope🌴",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "To be poor and be without trees is to be truly poor.",
    "Trees are the earth's endless effort to speak to the listening heaven.",
    "He who plants a tree plants a hope.",
    "A tree is known by its fruit; a man by his deeds.",
    "Trees are poems that the earth writes upon the sky.",
    "A society grows great when people plant trees under which they shall never sit. 🚀",
    "In every walk with nature, one receives far more than he seeks.",
    "If we do not plant the trees, we will not have the future we desire."
];

const Loader = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        // Select a random quote when the component mounts
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);

        // Change quote every 3 seconds
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div style={styles.loaderContainer}>
            <div style={styles.content}>
                <Lottie loop animationData={ecoscoperloader} play style={{ width: 250, height: 250 }} /> {/* Increased size */}
                <h4 style={styles.heading}>Welcome To Ecoscope...</h4>
                <p style={styles.quote}>{quote}</p>
            </div>
        </div>
    );
};

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: for a semi-transparent background
        zIndex: 9999 // Ensure the loader appears on top
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        marginTop: '20px',
        color: '#555',
        fontWeight: 'bold',
    },
    quote: {
        marginTop: '10px',
        color: '#555',
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '0 20px',
    }
};

export default Loader;
