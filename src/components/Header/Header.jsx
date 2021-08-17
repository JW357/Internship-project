import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStyles } from './style';

export default function Header() {
  const classes = useStyles();
  return (
    <Box className="header">
      <Typography className={classes.joinUs}>Join Us</Typography>
      <Typography variant="h2" className={classes.header}>
        Courses of excellent quality
      </Typography>
      <Typography variant="h5" className={classes.headerDescription}>We know how large objects will act, but things on a small scale just do not act that way</Typography>
      <Button className={classes.buttonQuote} variant="contained">
        Get Quote Now
      </Button>
      <Button className={classes.buttonLearn} variant="outlined">
        Learn More
      </Button>
    </Box>
  );
}
