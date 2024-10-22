import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider   } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NavBar from './component/NavBar/NavBar';
import Hero from './component/Landingpage/Hero/Hero';
import Seteps from './component/Landingpage/Seteps/Seteps';
import Service from './component/Landingpage/Services/Services.js';
import Technicalarticles from './component/Landingpage/Technicalarticles/Technicalarticles.js';
import Latestworks from './component/Landingpage/Latestworks/Latestworks.js';
import Latestarticles from './component/Landingpage/Latestarticles/Latestarticles.js';
import Technologiesused from './component/Landingpage/Technologiesused/Technologiesused.js';
import Features from './component/Landingpage/Features/Features.js';


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
      <Technicalarticles />
      <Latestworks />
      <Latestarticles />
      <Typography variant="h5">السلام عليكم ورحمة الله وبركاته</Typography>
    </ThemeProvider>
  );
}

export default App;
