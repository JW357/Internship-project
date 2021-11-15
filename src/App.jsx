import './App.scss';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Home from './components/Home';
import { theme } from './styles/commons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
