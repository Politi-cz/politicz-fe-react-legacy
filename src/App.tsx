import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4B7BF5'
      },
      secondary: {
        main: '#FFF'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
