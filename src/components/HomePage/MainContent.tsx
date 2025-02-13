import React, { useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';

const MainContent = () => {
  const imageUrl =
    'https://chat.nbkfinance.ru/upload/resize_cache/main/d6d/o4d9cxw9nb95nrls1yg1dak4v8js9ww9/512_512_1/photo_2024-04-29_01-37-37.jpg.png';
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setMessage('Ты самая лучшая! 💖');
    setOpen(open === false ? true : false);
  };
  return (
    <div className="main-content">
      <h2>С Днём Святого Валентина!</h2>
      <p>Нажми на кнопку, чтобы получить валентинку:</p>
      {open ? (
        <div className="element">
          <img src={imageUrl} alt="img" />
        </div>
      ) : (
        <></>
      )}
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleClick}>
        Отправить валентинку
      </motion.button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MainContent;
