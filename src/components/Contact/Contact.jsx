import React, { useState } from 'react';
import './style.scss';
import { Button } from '@material-ui/core';

function Contact() {
  const [address, setAddress] = useState(null);

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
          <input
            type="email"
            id="email"
            className="address__field"
            placeholder="Your Email"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="off"
          />
          <Button label="Subscribe" className="subscribe__button" variant="contained">
            Subscribe
          </Button>
        </div>
        <span className="greeting-text__line">
          {address ? `\u00A0 Hi, ${address.replace(/@.*/, '')}` : null}
        </span>
      </div>
    </section>
  );
}

export default Contact;
