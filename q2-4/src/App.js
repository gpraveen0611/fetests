import './App.css';
import Products from './components/product/Products';
import Similarities from './components/similarities/similarities';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import React from 'react';

function App() {

  const appTheme = createTheme({
    palette: {
      primary: {
        light: '#EBAFE',
        darker: '#053e85',
        main: '#5E7BFD',
        contrastText: '#3A53A2'        
      },
      secondary: {
        light: '#EBD4F7',
        main: '#FFC5F6',
        contrastText: '#FF9FB1',
      }
    }
  });

  return (
    <React.StrictMode>
      <main className='App'>
        <ThemeProvider theme={appTheme} m>
          <Products></Products>
          <Similarities></Similarities>
        </ThemeProvider>
      </main>
    </React.StrictMode>
  );
}

export default App;
