import './App.css';
import React from 'react';
import { createTheme, ThemeProvider   } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import NavBar from './component/NavBar/NavBar';


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
      <Typography variant="h5">السلام عليكم ورحمة الله وبركاته</Typography>
    </ThemeProvider>
  );
}

export default App;
