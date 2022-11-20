import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BasicAppBar from "./Nav";
import Intro from "./Chords101/Intro";
import Intro2 from "./Chords101/intro-2";
import FirstChordsLesson from "./Chords101/FirstChords";

const App = () => {
  return (
    <div>
      <BasicAppBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/study/chords/intro' element={<Intro />} />
        <Route path='/study/chords/lesson1' element={<FirstChordsLesson />} />
      </Routes>
      <ins class='scales_chords_api' chord='D#m(maj9)'></ins>
      <ins class='scales_chords_api' chord='Cmajor' instrument='piano'></ins>
      <ins
        class='scales_chords_api'
        chord='Cmajor'
        instrument='guitar'
        output='sound'
      ></ins>
      <ins
        class='scales_chords_api'
        chord='Cmajor'
        instrument='piano'
        output='sound'
      ></ins>
      {/* <Intro2 /> */}
    </div>
  );
};

export default App;
