import React from "react";
import { Routes, Route, redirect, Navigate } from "react-router-dom";

import Home from "./components/home.js";
import Example from "./components/testexample.js";

function App() {
  const user = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/example" element={<Example></Example>}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
}

export default App;
