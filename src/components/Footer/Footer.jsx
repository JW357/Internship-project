import React from 'react';
import './style.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <section className="footer__section">
      <div className="footer-column__container">
        <div className="footer-column">
          <h2>Get In Touch</h2>
          <p>
            the quick fox jumps over the
            <br />
            lazy dog
          </p>
          <div className="column-icon__box">
            <FacebookIcon className="facebook__icon" />
            <InstagramIcon className="instagram__icon" />
            <TwitterIcon className="twitter__icon" />
          </div>
        </div>
        <div className="footer-column">
          <h2>Company Info</h2>
          <a href="#Home">About Us</a>
          <a href="#Home">Carrier</a>
          <a href="#Home">We are hiring</a>
          <a href="#Home">Blog</a>
        </div>
        <div className="footer-column">
          <h2>Features</h2>
          <a href="#Home">Business Marketing</a>
          <a href="#Home">User Analytic</a>
          <a href="#Home">Live Chat</a>
          <a href="#Home">Unlimited Support</a>
        </div>
        <div className="footer-column">
          <h2>Resources</h2>
          <a href="#Home">IOS & Android</a>
          <a href="#Home">Watch a Demo</a>
          <a href="#Home">Customers</a>
          <a href="#Home ">API</a>
        </div>
      </div>
      <div className="footer-end__line">
        <h5>Made With Love By Figmaland All Right Reserved</h5>
      </div>
    </section>
  );
}

export default Footer;
