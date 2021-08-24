import React from 'react';
import './style.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Button } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StarIcon from '@material-ui/icons/Star';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function WatchCourses() {
  return (
    <section className="courses">
      <div className="courses__header">
        <h5>Practice Advice</h5>
        <h1>Watch our Courses</h1>
        <p>
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="course-option__container">
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image ">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
        <div className="course-option__block">
          <div className="course__image">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons--heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons--eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="option__header">
            <div className="rating__box">
              <h5>English</h5>
              <div className="rating__value">
                <StarIcon className="star__icon" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p className="course__description">
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
            <p className="course__sales">
              <VerticalAlignBottomIcon />
              15 sales
            </p>
            <p className="course__price">
              <span className="course__price course__price--normal">$16.48</span>
              <span className="course__price course__price--discount">  $6.48</span>
            </p>
            <div className="course__stats">
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> Pro ...</span>
              </p>
              <p className="stats__icon">
                <AssessmentIcon className="stats__icon stats__icon--chart" />
                <span className="stats__icon stats__icon--text"> 64 Les...</span>
              </p>
              <p className="stats__icon">
                <AccessAlarmIcon className="stats__icon stats__icon--time" />
                <span className="stats__icon stats__icon--text"> 22hr...</span>
              </p>
            </div>
            <Button
              color="white"
              variant="outlined"
              className="more-button__button more-button__button--course"
              endIcon={<ArrowForwardIosIcon />}
            >
              Learn More...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchCourses;
