import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../Navbar';
import Header from '../Header';

export default function Home() {
  return (
    <div>
      <Box className="App">
        <Navbar />
        <Header />
      </Box>
    </div>
  );
}
