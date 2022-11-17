import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AudioTest from "./AudioTest";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <AudioTest />
    </div>
  );
};

export default App;
