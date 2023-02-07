import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import About from './Pages/About';
import Works from './Pages/Works';
import Contact from './Pages/Contact';

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
              <Route path='/about' element={<About />} />
              <Route path='/works' element={<Works />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
