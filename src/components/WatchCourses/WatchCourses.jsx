import React from 'react';
import './style.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Button } from '@material-ui/core';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import AssessmentIcon from '@material-ui/icons/Assessment';
import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';

function WatchCourses() {
  return (
    <section className="courses">
      <div className="coursesHeader">
        <h5>Practice Advice</h5>
        <h1>Watch our Courses</h1>
        <p>
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="courseBlocksContainer">
        <div className="course__block">
          <div className="course__image course__image-first">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-second">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-third">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-fourth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-fifth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-sixth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-seventh">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-eighth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-ninth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-tenth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-eleventh">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
        <div className="course__block">
          <div className="course__image course__image-twelfth">
            <span className="sale">Sale</span>
            <div className="course__buttons">
              <Button
                aria-label="Add to favourites"
                color="white"
                className="course__buttons course__buttons-heart"
                variant="contained"
              >
                <FavoriteBorderIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-cart"
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                color="white"
                aria-label="Add to favourites"
                variant="contained"
                className="course__buttons course__buttons-eye"
              >
                <VisibilityIcon />
              </Button>
            </div>
          </div>
          <div className="block__header">
            <div className="rank__box">
              <h5>English</h5>
              <div className="rank">
                <StarIcon className="star" />
                <p>4.9</p>
              </div>
            </div>
            <h3>Graphic Design</h3>
            <p>
              We focus on ergonomics
              <br />
              and meeting you....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchCourses;
