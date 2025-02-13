import React from 'react';
import Auth from '../api/REST/auth';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [token, setToken] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState(
    'https://chat.nbkfinance.ru/upload/resize_cache/main/d6d/o4d9cxw9nb95nrls1yg1dak4v8js9ww9/512_512_1/photo_2024-04-29_01-37-37.jpg.png',
  );
  React.useEffect(() => {
    Auth().then(result => {
      console.log(result);
    });
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 relative overflow-hidden">
      {/* Анимированные сердечки */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-10 text-red-500 text-5xl"
      >
        ❤️
      </motion.div>
      <div>
        
    </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-red-600">С Днём Святого Валентина! ❤️</h1>
        <p className="text-gray-700 mt-2">Ты — моя самая большая любовь!</p>
        <img
          src={imageUrl}
          alt="Любимая"
          className="w-64 h-64 object-cover rounded-2xl mt-4 border-4 border-red-500"
          style={{
            clipPath:
              "path('M150 30 C180 -20, 300 -10, 300 100 C300 180, 150 270, 150 270 C150 270, 0 180, 0 100 C0 -10, 120 -20, 150 30 Z')",
          }}
        />
      </div>
    </div>
  );
}
