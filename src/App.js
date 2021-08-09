import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Toolbar, Button, Typography, Tabs, Tab, AppBar} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styled from 'styled-components'
// import styledComponents from './styledComponents'


function App() {
  return (
    <div className="App">
        <Toolbar position= "static">
        <Typography variant = "h5" className="logo">
          BrandName
        </Typography>
        {console.log("qqwwwwwwq")}
          <Tabs variant="fullWidth">
            <Tab label="Home"/>
            <Tab label="Product"/>
            <Tab label="Pricing"/>
            <Tab label="Contact"/>
          </Tabs>
        <Button color="primary">
          Login
        </Button>
        <Button 
          variant="outlined" 
          color="primary"
          fontSize="small"
          endIcon={<ArrowForwardIcon/>}>
            JOIN US
        </Button>
      </Toolbar>
      <header className="App-header">
        <p className="joinUs">Join Us</p>
        <Typography variant="h2" className="headerHeader">
          COURSES OF EXCELLENT QUALITY
        </Typography>
        <p className="headerText">We know how large objects will act, but things on a small scale just do not act that way</p>
        <Button variant="contained" color="primary">
          Get Quote Now
        </Button>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
      </header>
    </div>
  );
}

export default App;
