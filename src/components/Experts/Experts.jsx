import React, { useState, useEffect } from 'react';
import './style.scss';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import expert1 from './images/expert1.jpg';
import expert2 from './images/expert2.jpg';

function Experts() {
  const [starNumber] = useState(3);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    for (let i = 0; i <= starNumber; i += 1) {
      setStars((prevState) => [...prevState, i]);
    }
  }, []);

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
            <img src={expert1} className="expert__picture expert__picture--first" alt="lady working on computer" />
            <p className="review__text">
              Slate helps you see how many more days
              <br />
              you need to work to reach your financial
              <br />
              goal for the month and year.
            </p>
            <div className="star__rating">
              {stars.map((key) => <StarIcon className="star__icon" key={key} />)}
              <StarOutlineIcon className="star__icon" />
            </div>
            <p className="name__text">Regina Miles</p>
            <p className="role__text">Designer</p>
          </div>
          <div className="expert-review__block">
            <img src={expert2} className="expert__picture expert__picture--second" alt="lady in white suit" />
            <p className="review__text">
              Slate helps you see how many more days
              <br />
              you need to work to reach your financial
              <br />
              goal for the month and year.
            </p>
            <div className="star__rating">
              {stars.map((key) => <StarIcon className="star__icon" key={key} />)}
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
