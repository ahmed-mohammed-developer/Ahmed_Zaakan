import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer.js';
import { FaWhatsapp } from 'react-icons/fa';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home.js';
import NotFoundPage from './component/NotFoundPage/NotFoundPage.js';
import Resume from './component/Resume/Resume.js';
import Notes from './component/Notes/Notes.js';
import { ToastProvider } from './component/Notes/context/ToastContext.js';






const theme = createTheme({
  typography: {
    fontFamily: [
      'Cairo',
      'Tajawal',
    ].join(','),
  },
});

const App = () => {
  return (
    <ToastProvider>
    <ThemeProvider theme={theme}>
      <HashRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </HashRouter>
      <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
      <Footer />
    </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
