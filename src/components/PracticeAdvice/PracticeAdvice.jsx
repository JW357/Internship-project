/* eslint-disable max-len */
import React from 'react';
import './PracticeAdvice.style.scss';
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
          <div className="block1">
            <div className="iconBox1">
              <SentimentSatisfiedIcon fontSize="large" className="sentiment" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="block2">
            <div className="iconBox2">
              <DoneAllIcon fontSize="large" className="done" />
            </div>
            <h5>training Courses</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="block3">
            <div className="iconBox3">
              <CreditCardIcon fontSize="large" className="creditCard" />
            </div>
            <h5>Evaluation time</h5>
            <span />
            <p>The gradual accumulation of information about</p>
          </div>
          <div className="block4">
            <div className="iconBox4">
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
