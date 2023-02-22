import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Alumni from "./pages/alumni";
import News from "./pages/news";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
