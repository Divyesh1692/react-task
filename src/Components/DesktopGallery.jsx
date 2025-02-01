import React from "react";

const DesktopGallery = () => {
  return (
    <div className="relative  mt-[5%] w-[98vw] mx-auto justify-between hidden md:flex">
      <div className="flex w-[33.125vw] h-[28.96vw]">
        <img
          className="rounded-lg w-[33.125vw] h-[28.96vw] object-cover"
          src="/images/grid/girl.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-[43.34vw] h-[28.96vw]">
        <div className=" flex justify-between w-[43.34vw]">
          <img
            className="rounded-lg w-[21.25vw] h-[13.75vw] object-cover"
            src="/images/grid/pensil.png"
            alt=""
          />
          <img
            className="rounded-lg w-[21.25vw] h-[13.75vw] object-cover"
            src="/images/grid/nature.png"
            alt=""
          />
        </div>
        <div className=" flex w-[43.34vw] h-[14.17vw]">
          <img
            className="rounded-lg w-[43.34vw] h-[14.17vw] object-cover"
            src="/images/grid/flower.png"
            alt=""
          />
        </div>
      </div>
      <div className=" flex w-[20vw] h-[28.96vw]">
        <img
          className="rounded-lg w-[20vw] h-[28.96vw] object-cover"
          src="/images/grid/sculputre.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DesktopGallery;
