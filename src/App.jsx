import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import ArtGallery from "./ArtGalleryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artgallery" element={<ArtGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
