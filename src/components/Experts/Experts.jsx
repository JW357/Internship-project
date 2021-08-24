import React from 'react';
import './style.scss';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

function Experts() {
  return (
    <section className="experts">
      <div className="experts__container">
        <div className="experts__header">
          <h5>Practice Advice</h5>
          <h1>Our Experts Teacher</h1>
          <p>
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="experts-review__box">
          <div className="expert-review__block">
            <div className="expert__picture expert__picture--first" />
            <p className="review__text">
              Slate helps you see how many more days
              <br />
              you need to work to reach your financial
              <br />
              goal for the month and year.
            </p>
            <div className="rating__line">
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarOutlineIcon className="star__icon" />
            </div>
            <p className="name__text">Regina Miles</p>
            <p className="role__text">Designer</p>
          </div>
          <div className="expert-review__block">
            <div className="expert__picture expert__picture--second" />
            <p className="review__text">
              Slate helps you see how many more days
              <br />
              you need to work to reach your financial
              <br />
              goal for the month and year.
            </p>
            <div className="rating__line">
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarIcon className="star__icon" />
              <StarOutlineIcon className="star__icon" />
            </div>
            <p className="name__text">Regina Miles</p>
            <p className="role__text">Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experts;