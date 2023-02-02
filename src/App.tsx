import './App.css';
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, Grid } from '@mui/material';

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
        <Grid container direction="row">
          <Grid item xs={1}/>
          <Grid item xs={11}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
              <Route path='/works' element={<Works />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
