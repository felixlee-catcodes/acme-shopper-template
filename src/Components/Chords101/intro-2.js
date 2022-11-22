import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const slides = [
  {
    slide: 1,
    title: "What are chords?",
    text: "A chord is essentially any harmonic set of pitches or notes which are played simultaneously.",
    img: "https://www.8notes.com/school/theory/images/chords/cmaj.gif",
  },
  {
    slide: 3,
    title: "Chord Structure (continued)",
    text: "The image on the previous slide shows how a C major chord would be written using standard notation.      Specifics aside, if you're reading a piece of music and see any number of notes written stacked one upon the other, that means to play then all at once as a chord.",
  },
  {
    slide: 2,
    title: "Chord Structure",
    text: "The fundamental structure of a chord is a triad (3 notes or pitches.",
    img: "https://pianotels.com/wp-content/uploads/2018/12/C-Chord.jpg",
    subText:
      "Here's an image of the same C major chord highlighted on a piano keyboard. You can see that the notes in Cmajor are C-E-G.",
  },

  {
    slide: 4,
    title: "Basic Building Blocks",
    text: "A triad typically consists of the root, the 3rd, and the 5th.",
    subText:
      "The defining interval of the major chord is the major 3rd. And the minor 3rd gives the minor chord it's trademark somber sound. Both major and minor chords feature a perfect 5th interval.",
  },
  {
    slide: 6,
    title: "Triad Types",
    text: "The most common triad types are the major and minor triads. \n We'll learn more about them in the next lessons.",
  },
  {
    slide: 7,
    title: "Playing Chords",
    text: "Chords can be played on most any polyphonic instrument (i.e. any instrument that can play more than one note at a time).",
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
    <div className='el-wrapper'>
      <h2>A Brief Introduction to Chords</h2>
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
        {slides.map((slide, idx, arr) => (
          <div>
            <Item
              key={idx}
              slide={slide}
              idx={idx}
              length={arr.length - 1}
              className='slide'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Item = (props) => {
  return (
    <div className='slide-content'>
      <h2 className='slide-title'>{props.slide.title}</h2>
      <p className='slide-text'>{props.slide.text}</p>
      {props.slide.img ? (
        <img src={props.slide.img} alt='chord-img' height={250}></img>
      ) : null}
      {props.slide.subText ? (
        <p className='slide-text'>{props.slide.subText}</p>
      ) : null}
      {props.idx === 3 ? (
        <button className='next-lesson'>Intervals Crash Course</button>
      ) : null}
      {props.idx === props.length ? (
        <Link to='/study/chords/lesson1'>
          <button className='next-lesson'>Next Lesson</button>
        </Link>
      ) : null}
    </div>
  );
};
export default Intro2;
