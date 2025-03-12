// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; 

function Header() {
  const [text, setText] = useState('');
  const fullText = "hello there. i am vasileios.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 30); 

    return () => clearInterval(interval); 
  }, [fullText]);

  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}

export default Header;