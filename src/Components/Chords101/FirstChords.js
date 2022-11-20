import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CmajorSlide from "./Slides/CmajorSlide";
import CminorSlide from "./Slides/CminorSlide";
import CompareCmajCmin from "./Slides/CompareCmajCmin";

const slides = [<CmajorSlide />, <CminorSlide />, <CompareCmajCmin />];

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

const FirstChordsLesson = () => {
  return (
    <>
      <h2>First Chords</h2>
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
          <div key={idx}>{slide}</div>
        ))}
      </Carousel>
    </>
  );
};

export default FirstChordsLesson;
