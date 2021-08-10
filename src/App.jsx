import './App.css';
import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

function App() {
  return (
    <Box className="App">
      <Navbar />
      <Header />
    </Box>
  );
}

export default App;
