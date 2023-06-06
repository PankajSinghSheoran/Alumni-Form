import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Alumni from "./pages/alumni";
import News from "./pages/news";
import MenuBar from "./pages/menubar";

function App() {
  return (
    <>
      <MenuBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/news" element={<News />} />
        <Route path="/menubar" element={<MenuBar />} />
      </Routes>
    </>
  );
}

export default App;
