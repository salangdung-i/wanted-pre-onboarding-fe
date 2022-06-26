import React from 'react';
import { Route, Routes } from 'react-router';
import Main from './pages/main';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
