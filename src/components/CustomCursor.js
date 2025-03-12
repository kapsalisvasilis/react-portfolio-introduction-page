// src/components/CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [cursorStyle, setCursorStyle] = useState({
        left: '0px',
        top: '0px',
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorStyle({
                left: `${event.clientX}px`,
                top: `${event.clientY}px`,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="custom-cursor" style={cursorStyle}></div>
    );
};

export default CustomCursor;
