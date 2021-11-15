import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../Navbar';
import Header from '../Header';
import PracticeAdvice from '../PracticeAdvice';
import FeaturedProducts from '../FeaturedProducts';
import WatchCourses from '../WatchCourses';
import Experts from '../Experts/Experts';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { useStyles } from './style';

export default function Home() {
  const classes = useStyles();
  return (
    <>
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
        <Contact />
      </body>
      <Footer />
    </>
  );
}
