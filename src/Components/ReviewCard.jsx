import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-[90.84vw] md:w-[25vw] py-[5%] flex flex-col shadow-xl  mx-auto rounded-lg mb-[8%] bg-white justify-center items-center">
      <p className="text-[#535454] font-[500] text-[3.89vw] md:text-[0.98vw]">
        "{review.comment}"
      </p>
      <img
        className="w-[14.45vw] h-[14.43vw] md:w-[3.62vw] md:h-[3.62vw] rounded-full mt-[5%]"
        // src={`https://admin.artpallatte.com/${review.reviewImage}`}
        src={`${review.reviewImage}`}
        alt=""
      />
      <h4 className="mt-4 font-semibold text-[4.45vw] md:text-[1.12vw]">
        {review.name}
      </h4>
      <h4 className="mt-4 font-semibold text-[4.45vw] md:text-[1.12vw]">
        Artist
      </h4>
    </div>
  );
};

export default ReviewCard;
