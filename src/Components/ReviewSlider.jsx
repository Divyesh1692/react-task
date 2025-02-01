import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";
import Response from "../config/Api";
import { section } from "framer-motion/client";
import { Link } from "react-router-dom";

const reviews = [
  {
    id: 1,
    comment: "This is an amazing product!",
    name: "John Doe",
    reviewImage: "/images/grid/nature.png",
  },
  {
    id: 2,
    comment: "Loved it! Highly recommend.",
    name: "Jane Smith",
    reviewImage: "/images/grid/nature.png",
  },
  {
    id: 3,
    comment: "Great experience, will buy again.",
    name: "Alice Brown",
    reviewImage: "/images/grid/nature.png",
  },
  {
    id: 4,
    comment: "Fantastic customer service!",
    name: "Mike Wilson",
    reviewImage: "/images/grid/nature.png",
  },
  {
    id: 5,
    comment: "Best purchase ever.",
    name: "Emma Johnson",
    reviewImage: "/images/grid/nature.png",
  },
];

const ReviewsSlider = () => {
  //   const [reviews, setReview] = useState([]);

  //   const getData = async () => {
  //     try {
  //       const response = await Response();
  //       console.log(response.reviews);
  //       setReview(response.reviews); // Set reviews state with the fetched data
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <section>
      <img
        className=" absolute flex flex-col md:hidden object-cover w-[100vw] mt-[-5%] "
        src="/images/stars.svg"
        alt="Stars Background"
      />
      <div className="w-full relative flex justify-center mt-[10%] md:mt-[5%]">
        <h2 className="text-[Poppins] text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
          Reviews
        </h2>
        <img
          className="absolute w-[18.34vw] ml-[30%] md:hidden"
          src="/images/arrow.svg"
          alt="Arrow"
        />
      </div>

      <div className="relative w-[100vw] md:w-[85vw] mx-auto flex my-[5%] md:my-[2%] ">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="mb-[2%] ">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        to="/artgallery"
        className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw] mt-[2%] mx-auto flex"
      >
        <button className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw]  mx-auto ">
          <div className="w-[29.17vw] md:w-[24.93vw] h-[8.89vw] md:h-[3.47vw] bg-[#4B0082]  rounded-tl-2xl rounded-br-2xl flex justify-center items-center text-[3.89vw] md:text-[1.39vw] text-white font-[600]">
          Add Yours
          </div>
        </button>
      </Link>
    </section>
  );
};

export default ReviewsSlider;
