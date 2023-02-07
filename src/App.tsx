import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
