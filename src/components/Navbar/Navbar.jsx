import React from 'react';
import {
  Toolbar, Button, Typography, Tabs, Tab, Box,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyles } from './Navbar.style';

export default function Navbar() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbarStyle}>
      <Typography variant="h5" className={classes.logoStyle}>
        BrandName
      </Typography>
      <Tabs className={classes.tabsStyle}>
        <Tab className={classes.navStyle} label="Home" />
        <Tab className={classes.navStyle} label="Product" />
        <Tab className={classes.navStyle} label="Pricing" />
        <Tab className={classes.navStyle} label="Contact" />
      </Tabs>
      <Button className={classes.loginStyle}>
        Login
      </Button>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        fontSize="small"
        endIcon={<ArrowForwardIcon />}
      >
        JOIN US
      </Button>
      <Box className={classes.blueElement2} />
    </Toolbar>
  );
}
