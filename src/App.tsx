import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Works from './Pages/Works';
import Footer from './Components/Footer';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Space Mono',
        'Chilanka',
        'cursive',
      ].join(',',)
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
