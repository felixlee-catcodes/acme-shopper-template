import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AudioTest from "./AudioTest";
import Home from "./Home";
import ResponsiveAppBar from "./Nav";

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <AudioTest />
    </div>
  );
};

export default App;
