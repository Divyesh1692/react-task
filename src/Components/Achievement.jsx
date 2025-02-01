import React from "react";

const Achievement = ({ img, title, date, desc }) => {
  return (
    <div className="relative bg-white flex flex-col w-[61.67vw] md:w-[29.52vw] mx-auto items-center space-y-4  p-4 ">
      <img
        src={`https://admin.artpallatte.com/${img}`}
        alt={title}
        className="w-20 h-20 rounded-full"
      />
      {/* <img
        src="/logos/achievementFrame.svg"
        alt="Profile Frame"
        className="absolute inset-0 bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12"
      /> */}
      <h2 className="text-[5vw] md:text-[1.53vw] font-semibold">{title}</h2>
      <p className="font-[400] text-[3.34vw] md:text-[1.25vw] text-[#FFB600]">
        {date}
      </p>
      <p className="text-[3.89vw] md:text-[1.25vw] mt-[5%] md:mt-[2%] w-[88.34vw] md:w-[75vw]  text-[#535454]  font-[600] text-center">
        {desc}
      </p>
    </div>
  );
};

export default Achievement;
