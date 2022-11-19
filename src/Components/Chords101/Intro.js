import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";

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

function getCommonProps() {
  return {
    renderPrev: (btnProps) => (
      <Button variant='contained' {...btnProps}>
        Prev
      </Button>
    ),
    renderNext: (btnProps) => (
      <Button variant='contained' {...btnProps}>
        Next
      </Button>
    ),
    renderDot: ({ selected, index }) => (
      <Button variant={selected ? "contained" : "outlined"}>{index}</Button>
    ),
    dots: true,
    showSlides: 3,
    speed: 1000 * 1,
    spacing: 2,
    autoPlay: false,
    infinity: false,
    pauseOnHover: true,
    disableTransition: false,
    sx: {},
  };
}

const Intro = () => {
  return (
    <div className='slide-container'>
      <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
        <h2>So what is a chord?</h2>
        <Carousel {...getCommonProps()} showSlides={1} sx={{ width: 800 }}>
          {slides.map((slide, i) => (
            <Paper
              key={`item-${i}`}
              sx={{ height: 400, width: 800, background: "#fafafa" }}
            >
              <p className='slide-text'>{slide.text}</p>
            </Paper>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default Intro;
