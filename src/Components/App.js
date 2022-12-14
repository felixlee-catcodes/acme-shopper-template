import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BasicAppBar from "./Nav";
import Intro2 from "./Chords101/intro-2";
import FirstChordsLesson from "./Chords101/FirstChords";
import Lesson from "./Intervals/Lesson";

const App = () => {
  return (
    <div id='wrapper'>
      <BasicAppBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/study/chords/intro' element={<Intro2 />} />
        <Route path='/study/chords/lesson1' element={<FirstChordsLesson />} />
        <Route path='/study/intervals' element={<Lesson />} />
      </Routes>
    </div>
  );
};

export default App;
