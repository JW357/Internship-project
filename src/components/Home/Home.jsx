import React from 'react';
import { Box, ThemeProvider } from '@material-ui/core';
import Navbar from '../Navbar';
import Header from '../Header';
import { theme } from '../../styles/commons';
import { useStyles } from './Home.style';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.blueElement1} />
      <ThemeProvider className={classes.root} theme={theme}>
        <Box className={classes.headerElements}>
          <Navbar />
          <Header />
        </Box>
      </ThemeProvider>
    </>
  );
}
