import React from "react";

const MobileGallery = () => {
  return (
    <div className="relative flex mt-[5%] w-[92vw] mx-auto justify-between md:hidden ">
      <div className="flex w-[27.70vw]">
        <img
          className="rounded-lg w-[27.70vw] h-[62.23vw] object-cover"
          src="/images/grid/girl.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-[27.70vw] h-[62.23vw]">
        <img
          className="rounded-lg w-[27.70vw] h-[20.84vw] object-cover"
          src="/images/grid/pensil.png"
          alt=""
        />
        <img
          className="rounded-lg w-[27.70vw] h-[39.45vw] object-cover"
          src="/images/grid/flower.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-[32.125vw] h-[62.23vw]">
        <img
          className="rounded-lg w-[32.125vw] h-[22.78vw] object-cover"
          src="/images/grid/sculputre.png"
          alt=""
        />
        <img
          className="rounded-lg w-[32.125vw] h-[19.17vw] object-cover"
          src="/images/grid/wall.png"
          alt=""
        />
        <img
          className="rounded-lg w-[32.125vw] h-[15.56vw] object-cover"
          src="/images/grid/nature.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MobileGallery;
