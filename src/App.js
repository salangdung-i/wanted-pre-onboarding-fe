import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Main from './pages/main';
import Login from './pages/login';

function App({ auth }) {
  const [isAuth, setIsAuth] = useState(false);

  const onLogIn = (user) => {
    setIsAuth(auth.login(user));
  };

  const onLogout = () => {
    setIsAuth(auth.logout());
  };

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<Main onLogout={onLogout} />} />
      ) : (
        <Route path="/" element={<Login onLogIn={onLogIn} />} />
      )}
    </Routes>
  );
}

export default App;
