import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ArtGalleryCard from "./Components/ArtGalleryCard";
import Response from "./config/Api";
import Contact from "./Components/Contact";

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Replace this with your actual API URL
    const fetchArtworks = async () => {
      try {
        const response = await Response();
        console.log(response.artworks);

        setArtworks(response.artworks); // Assuming API returns an array
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Navbar color={"black"} />

      <div className="mt-[20%] md:mt-[8%]">
        <h2 className="text-[Poppins] flex justify-left md:hidden ml-[5%] text-[6.12vw] md:text-[2.09vw] font-[700] text-[#4B0082]">
          Art Gallery
        </h2>
        <div className="flex flex-col mt-[2%] md:flex-row relative ">
          {artworks.map((artwork) => (
            <ArtGalleryCard key={artwork._id} artwork={artwork} />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ArtGallery;
