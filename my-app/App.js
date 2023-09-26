import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleSignInScreen from './app/GoogleSIgnInScreen';
import HomeScreen from './app/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/google-sign-in" element={<GoogleSignInScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;