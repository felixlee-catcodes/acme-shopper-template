import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const slides = [
  {
    slide: 1,
    text: "a chord is essentially any harmonic set of pitches or notes which are played simultaneously",
  },
  {
    slide: 2,
    text: "the fundamental structure of a chord is a triad (3 notes or pitches",
  },
  {
    slide: 3,
    text: "a triad typically consists of the root, the 3rd, and the 5th",
  },
  {
    slide: 4,
    text: "the most common triad types are the major and minor triads. \n We'll learn more about them in the next lessons.",
  },
  {
    slide: 5,
    text: "chords can be played on most any polyphonic instrument (i.e. any instrument that can play more than one note at a time)",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Intro2 = () => {
  return (
    <>
      <hr />
      <h2>What are chords?</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={1000}
        // beforeChange={function (nextSlide, _ref2) {
        //   var currentSlide = _ref2.currentSlide;
        //   _ref2.onMove;
        //   return alert(
        //     "previous slide is " + currentSlide + " nextSlide is " + nextSlide
        //   );
        // }}
        centerMode={false}
        className=''
        containerClass='container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={true}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=''
        slidesToSlide={1}
        swipeable
        sx={{ height: 500 }}
      >
        {slides.map((slide, idx) => (
          <Item key={idx} slide={slide} className='slide' />
        ))}
      </Carousel>
    </>
  );
};

const Item = (props) => {
  return (
    <div className='slide-content'>
      <h3>{props.slide.text}</h3>
    </div>
  );
};
export default Intro2;
