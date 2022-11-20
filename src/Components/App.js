import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AudioTest from "./AudioTest";
import Home from "./Home";
import BasicAppBar from "./Nav";
import Intro from "./Chords101/Intro";
import Intro2 from "./Chords101/intro-2";
import PermanentDrawerLeft from "./Drawer";
import FirstChordsLesson from "./Chords101/FirstChords";
import TemporaryDrawer from "./Drawer";

const App = () => {
  return (
    <div>
      <BasicAppBar />
      {/* <PermanentDrawerLeft /> */}
      <TemporaryDrawer />
      {/* <NavPlusSideBar /> */}
      {/* <DrawerAppBar /> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/study/chords/intro' element={<Intro />} />
        <Route path='/study/chords/lesson1' element={<FirstChordsLesson />} />
      </Routes>
      {/* <Intro2 /> */}
    </div>
  );
};

export default App;
