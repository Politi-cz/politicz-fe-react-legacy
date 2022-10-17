import Button from '@mui/material/Button';
import {} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import { Navbar } from './components/Navbar';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4B7BF5',
      },
      secondary: {
        main: '#FFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
