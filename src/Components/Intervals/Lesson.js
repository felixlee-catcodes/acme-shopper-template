import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IntervalIntro from "./Intro";
import RootThirdFifth from "./Root";
import Major3rd from "./Major3rd";
import Perfect5th from "./Perfect5th";
import IntervalQuiz from "./Quiz";
const slides = [
  <IntervalIntro />,
  <RootThirdFifth />,
  <Major3rd />,
  <Perfect5th />,
  <IntervalQuiz />,
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

const IntervalsLesson = () => {
  return (
    <div className='el-wrapper'>
      <h2>Intervals</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={1000}
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
          <div className='test' key={idx}>
            {slide}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IntervalsLesson;
