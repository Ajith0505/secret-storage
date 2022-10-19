import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Layouts/Home";
import Adlisting from "./Layouts/Adlistings";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Adlisting />}></Route>
    </Routes>
  );
}

export default App;
