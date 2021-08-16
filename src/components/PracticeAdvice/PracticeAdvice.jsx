/* eslint-disable max-len */
import React from 'react';
import './style.scss';
import TuneIcon from '@material-ui/icons/Tune';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function PracticeAdvice() {
  return (
    <section>
      <div className="practiceContainer">
        <div className="practiceHeader">
          <h5>Practice Advice</h5>
          <h1>Make online education accesible</h1>
          <p>
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="practiceBlocks">
          <div className="first__block">
            <div className="first-icon__box">
              <SentimentSatisfiedIcon fontSize="large" className="sentiment" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="second__block">
            <div className="second-icon__box">
              <DoneAllIcon fontSize="large" className="done" />
            </div>
            <h5>training Courses</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="third__block">
            <div className="third-icon__box">
              <CreditCardIcon fontSize="large" className="creditCard" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="fourth__block">
            <div className="fourth-icon__box">
              <TuneIcon fontSize="large" className="tune" />
            </div>
            <h5>Market Analisys</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PracticeAdvice;
