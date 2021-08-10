import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';

export default function Header() {
  return (
    <Box className="header">
      <Typography className="joinUs">Join Us</Typography>
      <Typography variant="h2" className="headerHeader">
        COURSES OF EXCELLENT QUALITY
      </Typography>
      <Typography variant="h5" className="headerText">We know how large objects will act, but things on a small scale just do not act that way</Typography>
      <Button variant="contained" color="primary">
        Get Quote Now
      </Button>
      <Button variant="outlined" color="primary">
        Learn More
      </Button>
    </Box>
  );
}
