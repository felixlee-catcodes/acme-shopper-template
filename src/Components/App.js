import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AudioTest from "./AudioTest";
import Home from "./Home";
import ResponsiveAppBar from "./Nav";
import Intro from "./Chords101/Intro";
import Intro2 from "./Chords101/intro-2";
import PermanentDrawerLeft from "./Drawer";
import CmajorSlide from "./Chords101/Slides/CmajorSlide";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      {/* <PermanentDrawerLeft /> */}
      {/* <AudioTest /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/study/chords/intro' element={<Intro />} />
      </Routes>
      {/* <Intro2 /> */}
      <CmajorSlide />
    </div>
  );
};

export default App;
