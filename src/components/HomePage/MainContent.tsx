import React, { useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import BitrixOauth from '../../api/REST/auth';
import BitrixLogin from '../../api/REST/login';
import BitrixResponse from '../../types/BitrixResponse';

const MainContent = () => {
  const imageUrl =
    'https://chat.nbkfinance.ru/upload/resize_cache/main/d6d/o4d9cxw9nb95nrls1yg1dak4v8js9ww9/512_512_1/photo_2024-04-29_01-37-37.jpg.png';
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setMessage('Ты самая лучшая/ий!💖💖💖');
    setOpen(open === false ? true : false);
  };
  const [name, setName] = React.useState<string>('');
  const [secondName, setSecondName] = React.useState<string>('');
  const [avatar, setAvatar] = React.useState<string>('');
  React.useEffect(() => {
    BitrixOauth().then(async res => {
      const token = res.data as string;
      await BitrixLogin({
        token,
      }).then(r => {
        console.log(r);
        const result = r as BitrixResponse;
        setName(result.firstname);
        setSecondName(result.secondname);
        setAvatar('https:/chat.nbkfinance.ru' + result.avatar);
      });
    });
  });

  return (
    <div className="main-content">
      <h2>
        С Днём Святого Валентина {name} {secondName}!
      </h2>
      <p>Нажми на кнопку, чтобы получить валентинку:</p>
      {open ? (
        <div className="element">
          <img src={avatar} alt="img" />
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
