import React from 'react';
import './App.css';
import Header from './components/HomePage/Header';
import MainContent from './components/HomePage/MainContent';
import Footer from './components/HomePage/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
