import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider   } from '@mui/material/styles';
import NavBar from './component/NavBar/NavBar';
import Hero from './component/Landingpage/Hero/Hero';
import Seteps from './component/Landingpage/Seteps/Seteps';
import Service from './component/Landingpage/Services/Services.js';
import Technicalarticles from './component/Landingpage/Technicalarticles/Technicalarticles.js';
import Latestworks from './component/Landingpage/Latestworks/Latestworks.js';
import Latestarticles from './component/Landingpage/Latestarticles/Latestarticles.js';
import Technologiesused from './component/Landingpage/Technologiesused/Technologiesused.js';
import Features from './component/Landingpage/Features/Features.js';
import Contactme from './component/Landingpage/Contactme/Contactme.js';
import MyBooks from './component/Landingpage/MyBooks/MyBooks.js';
import Footer from './component/Footer/Footer.js';
import { FaWhatsapp } from 'react-icons/fa';




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
    <ThemeProvider theme={theme}>
      <NavBar />
      <Hero />
      <Service />
      <Seteps />
      <Technologiesused />
      <Features />
      <Contactme />
      <Technicalarticles />
      <Latestworks />
      <Latestarticles />
      <MyBooks />
      <Footer />
      <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </ThemeProvider>
  );
}

export default App;
