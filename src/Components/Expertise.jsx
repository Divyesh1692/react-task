import React, { useEffect, useState } from "react";
import Response from "../config/Api";
import Slider from "./Slider";

const Expertise = () => {
  const [overview, setOverview] = useState();

  const getData = async () => {
    try {
      const response = await Response();
      // console.log(response);
      setOverview(response.artistInfo.overview);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="art-information">
      <div className="relative flex flex-col mt-[7%]">
        <div className="w-full relative flex">
          <h2 className="text-[Poppins] mx-auto  text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
            My Expertise Area
          </h2>
          <img
            className="absolute w-[18.34vw] ml-[58%] md:hidden"
            src="/images/arrow.svg"
            alt=""
          />
        </div>
        <div className="text-[3.34vw] mt-[5%] md:mt-[2%] w-[88.34vw] md:w-[75vw] mx-auto text-[#535454] md:text-[1.39vw] font-[600] text-[Poppins] text-center ">
          “An artist with a passion for creative expression and a member of the
          global art community, Art Pallatte.”
        </div>
        <div className="absolute  md:hidden mt-[10%]">
          <img
            className="w-[100vw] object-cover"
            src="/images/colors.svg"
            alt=""
          />
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Expertise;
