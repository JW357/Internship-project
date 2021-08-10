import React from 'react';
import {
  Toolbar, Button, Typography, Tabs, Tab,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Navbar() {
  return (
    <Toolbar position="static">
      <Typography variant="h5" className="logo">
        BrandName
      </Typography>
      <Tabs variant="fullWidth">
        <Tab label="Home" />
        <Tab label="Product" />
        <Tab label="Pricing" />
        <Tab label="Contact" />
      </Tabs>
      <Button color="primary">
        Login
      </Button>
      <Button
        variant="outlined"
        color="primary"
        fontSize="small"
        endIcon={<ArrowForwardIcon />}
      >
        JOIN US
      </Button>
    </Toolbar>
  );
}

export default Navbar;
