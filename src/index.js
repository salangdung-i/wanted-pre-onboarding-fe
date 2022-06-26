import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import AuthService from './service/authService';
import InstagramService from './service/instagramService';

const auth = new AuthService();
const service = new InstagramService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App auth={auth} service={service} />
    </BrowserRouter>
  </React.StrictMode>
);
