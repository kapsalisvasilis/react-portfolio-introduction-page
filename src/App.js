// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Projects from './components/Projects';
import Counter from './components/Counter';
import CustomCursor from './components/CustomCursor';

function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 120000); // 120 seconds = 120000 milliseconds

        return () => clearTimeout(timer); // ccleanup the timer on component unmount
    }, []);

    return (
        <div className="app">
            <Header />
            <SocialMedia />
            <Counter />
            <Projects />
            <CustomCursor /> {}
        </div>
    );
}

export default App;