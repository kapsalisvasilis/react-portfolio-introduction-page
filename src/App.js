// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Projects from './components/Projects';
import Counter from './components/Counter';
import CustomCursor from './components/CustomCursor'; // Import the CustomCursor

function App() {
    return (
        <div className="app">
            <Header />
            <SocialMedia />
            <Counter />
            <Projects />
            <CustomCursor /> {/* Add the CustomCursor component */}
        </div>
    );
}

export default App;
