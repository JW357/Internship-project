import React from 'react';
import { Box, ThemeProvider } from '@material-ui/core';
import Navbar from '../Navbar';
import Header from '../Header';
import PracticeAdvice from '../PracticeAdvice';
import FeaturedProducts from '../FeaturedProducts';
import WatchCourses from '../WatchCourses';
import Experts from '../Experts/Experts';
import { theme } from '../../styles/commons';
import { useStyles } from './style';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider className={classes.root} theme={theme}>
        <Box className={classes.backgroundBoxSmall} />
        <Box className={classes.headerCourses}>
          <Navbar />
          <Header />
        </Box>
        <Box className={classes.backgroundBoxBig} />
        <body>
          <PracticeAdvice />
          <FeaturedProducts />
          <WatchCourses />
          <Experts />
        </body>
      </ThemeProvider>
    </>
  );
}
