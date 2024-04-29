import React, { useState, createContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import Moon from './assets/moon.svg'
import Sun from './assets/sun.svg'

import Main from './Pages/Main';
import Works from './Pages/Works';
import Footer from './Components/Footer';

export const ThemeContext = createContext<string | null>(null);

function App() {
  const [theme, setTheme] = useState<string>('light')
  const toggleTheme = () => {
    setTheme((current) => current === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
        <main className="App" id={theme}>
          <section className='btn-section'>
            <button onClick={toggleTheme} className="btn" id={theme}>
              {theme === 'light' ?
                <img src={Moon} alt='dark' className="icon" /> :
                <img src={Sun} alt='light' className="icon" />
              }
            </button>
          </section>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/works' element={<Works />} />
          </Routes>
        </main>
        <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
