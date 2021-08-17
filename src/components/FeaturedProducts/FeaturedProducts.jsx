import React from 'react';
import './style.scss';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import image from './pictureproducts.png';

function FeaturedProducts() {
  return (
    <div className="productsContainer">
      <img className="productImage" src={image} alt="child-stats" />
      <div className="productsHeader">
        <span className="redStripe" />
        <h1>Featured Products</h1>
        <p>
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics:
          <br />
          Newtonian mechanics
        </p>
        <Button
          className="moreButton"
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
