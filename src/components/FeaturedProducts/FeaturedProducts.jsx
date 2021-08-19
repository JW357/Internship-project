import React from 'react';
import './style.scss';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import image from './pictureproducts.png';

function FeaturedProducts() {
  return (
    <div className="products__container">
      <img src={image} alt="child-stats" />
      <div className="products__header">
        <span className="practice__divider--red" />
        <h1>Featured Products</h1>
        <p>
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics:
          <br />
          Newtonian mechanics
        </p>
        <Button
          className="more-button__button"
          endIcon={<ArrowForwardIosIcon />}
          variant=""
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default FeaturedProducts;
