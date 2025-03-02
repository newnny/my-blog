import React, { useState, createContext, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Moon from './assets/moon.svg'
import Sun from './assets/sun.svg'

import Main from './Pages/Main';
import View from './Pages/View';
import Footer from './Components/Footer';

export const ThemeContext = createContext<string | null>(null);

function App() {
  const [theme, setTheme] = useState<string>('light')
  const toggleTheme = () => {
    setTheme((current) => current === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#e0dcd9' : '#424242'; 
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className='min-h-screen' id={theme}>
        <main className='h-full'>
          <section className='btn-section'>
            <button onClick={toggleTheme} className="btn" id={theme}>
              {theme === 'light' ?
                <img src={Moon} alt='dark' className="icon" /> :
                <img src={Sun} alt='light' className="icon bg-[#e0dcd9] rounded" />
              }
            </button>
          </section>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/view' element={<View />} />
          </Routes>
        </main>
        <div className='mb-10 sm:mb-0'>
        <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
