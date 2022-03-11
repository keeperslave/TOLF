import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Footer from './components/Footer';
import GlobalStyle from './theme/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
