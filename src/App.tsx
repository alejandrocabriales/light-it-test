import React from 'react';
import './App.css';
import PatientContainer from './containers/PatientContainer';
import PatientProvider from './context/PatientContext';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PatientProvider>
          <PatientContainer />
        </PatientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
