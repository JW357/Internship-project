import React from 'react';
import './style.scss';
import { TextField, Button } from '@material-ui/core';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h5>Practice Advice</h5>
          <h1>JOIN US</h1>
          <p>
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="contact__form">
          <TextField label="Your Email" variant="outlined" className="address__field" />
          <Button label="Subscribe" className="subscribe__button" variant="contained">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
