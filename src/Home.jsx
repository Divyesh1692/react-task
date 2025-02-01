// Home.js or the main component of your homepage

import React from "react";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Achievements from "./Components/Achievements";
import ArtGallery from "./Components/ArtGallery";
import Navbar from "./Components/Navbar";
import ReviewsSlider from "./Components/ReviewSlider";
import Contact from "./Components/Contact";

const Home = () => {
  return (
    <div id="home" >
      <Navbar color={"white"} />
      <HeroSection />

      {/* About Section */}
      <About />

      {/* My Experties Areas */}
      <Expertise />

      {/* achievements Section */}

      <Achievements />

      {/* art-gallery Section */}
      <ArtGallery />

      <ReviewsSlider />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
