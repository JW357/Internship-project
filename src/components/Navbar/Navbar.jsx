import React from 'react';
import {
  Toolbar, Button, Typography, Tabs, Tab,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useStyles } from './style';

export default function Navbar() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.logo}>
        BrandName
      </Typography>
      <Tabs className={classes.tabs}>
        <Tab className={classes.nav} id="Home" label="Home" />
        <Tab className={classes.nav} id="Product" label="Product" />
        <Tab className={classes.nav} id="Pricing" label="Pricing" />
        <Tab className={classes.nav} id="Contact" label="Contact" />
      </Tabs>
      <Button className={classes.login}>
        Login
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        fontSize="small"
        endIcon={<ArrowForwardIcon />}
      >
        JOIN US
      </Button>
    </Toolbar>
  );
}
