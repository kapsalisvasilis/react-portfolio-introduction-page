// src/components/Counter.js
import React, { useState } from 'react';
import { motion } from "framer-motion";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    if (count + 1 === 10) {
      setMessage("It's not very effective");
    }
  };

  return (
    <section id="counter">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}  
        whileTap={{ scale: 0.9 }}    
        animate={{ rotate: count * 20 }} 
        transition={{ type: "spring", stiffness: 400, damping: 10 }} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'black', // Change background color to black
          color: 'orange', // Change text color to orange
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        ?
      </motion.button>

      {message && (
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={{ opacity: 1 }}  // Fade in
          transition={{ duration: 0.5 }} // Smooth transition
          style={{ color: 'orange', fontWeight: 'bold' }} // Change text color to orange
        >
          {message}
        </motion.p>
      )}
    </section>
  );
}

export default Counter;