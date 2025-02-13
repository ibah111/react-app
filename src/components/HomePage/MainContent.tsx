import React, { useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';

const MainContent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Ты самая лучшая! 💖');
  };

  return (
    <div className="main-content">
      <h2>С Днём Святого Валентина!</h2>
      <p>Нажми на кнопку, чтобы получить валентинку:</p>

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
        Отправить валентинку
      </motion.button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MainContent;
