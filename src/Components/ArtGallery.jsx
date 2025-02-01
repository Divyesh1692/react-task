import { section } from "framer-motion/client";
import React from "react";
import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";
import { Link } from "react-router-dom";

const ArtGallery = () => {
  const images = [
    "/images/art1.jpg",
    "/images/art2.jpg",
    "/images/art3.jpg",
    "/images/art4.jpg",
    "/images/art5.jpg",
    "/images/art6.jpg",
  ];

  return (
    <section id="art-gallery" className="relative w-full flex flex-col">
      <img
        className="absolute flex flex-col md:hidden object-cover w-[100vw] mt-[-10%]"
        src="/images/stars.svg"
        alt="Stars Background"
      />
      <div className="w-full relative flex justify-center mt-[5%]">
        <h2 className="text-[Poppins] text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
          Art Gallery
        </h2>
        <img
          className="absolute w-[18.34vw] ml-[20%] md:hidden"
          src="/images/arrow.svg"
          alt="Arrow"
        />
      </div>
      <MobileGallery />
      <DesktopGallery />
      <Link
        to="/artgallery"
        className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw] mt-[5%] mx-auto "
      >
        <button className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw]  mx-auto ">
          <div className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw] bg-[#4B0082]  rounded-tl-2xl rounded-br-2xl flex justify-center items-center text-[3.89vw] md:text-[1.39vw] text-white font-[600]">
            See All
          </div>
        </button>
      </Link>
    </section>
  );
};

export default ArtGallery;
