import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ArtGalleryCard = ({ artwork }) => {
  if (!artwork) return <p>No artwork data available</p>;

  const {
    title,
    price,
    description,
    mainImage,
    additionalImages = [],
    availability = {},
  } = artwork;

  // WhatsApp Inquiry Link
  const whatsappMessage = `I want to know more about this Art "${title}": https://admin.artpallatte.com${mainImage}  priced at ₹${price}.`;
  const whatsappUrl = `https://wa.me/9157425585?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="w-[100vw] md:w-[28.54vw]  mx-auto bg-white rounded-lg drop-shadow shadow-xl p-4">
      {/* Slider Section */}
      <div className="relative">
        {/* Main Image */}
        {/* <img
          src={`https://admin.artpallatte.com/${mainImage}`}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        /> */}

        {/* Additional Images Slider */}
        {additionalImages.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            className="mt-2 shadow-2xl rounded-lg md:shadow-none"
          >
            {additionalImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`https://admin.artpallatte.com/${img}`}
                  alt={`Artwork ${index}`}
                  className="w-full h-48 object-cover rounded-lg "
                />
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons */}
            <button className="custom-swiper-prev z-20 text-[0.8vw] absolute left-[-6%] top-1/2 -translate-y-1/2 bg-white justify-end items-center pr-[3.5%] text-black w-[3.34vw] h-[3.34vw] rounded-full hidden md:flex">
              <SlArrowLeft />
            </button>
            <button className="custom-swiper-next z-20 text-[0.8vw] absolute right-[-6%] top-1/2 -translate-y-1/2 bg-white justify-start items-center pl-[3.5%] text-black w-[3.34vw] h-[3.34vw] rounded-full hidden md:flex">
              <SlArrowRight />
            </button>
          </Swiper>
        )}
      </div>
      {/* Details Section */}
      <div className="md:mt-4 mt-0 flex flex-row md:border-2 p-2 rounded-br-xl rounded-bl-xl border-[#D8BFD8] justify-between">
        {/* Left: Title & Price */}
        <div>
          <h2 className="text-md font-bold">{title}</h2>
          <p className="text-md font-semibold text-gray-600">₹{price}</p>
        </div>

        {/* Right: Availability */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong>Out of India:</strong>{" "}
            {availability.outOfIndia ? "Yes" : "No"}
          </p>
          <p>
            <strong>Wholesale:</strong> {availability.wholesale ? "Yes" : "No"}
          </p>
        </div>
      </div>
      {/* Description */}
      <p className="mt-0 p-2 h-20 text-gray-700 line-clamp-3  ">
        {description}
      </p>
      {/* Inquiry Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center bg-[#4B0082] text-white py-2 px-4 rounded-full md:rounded-none md:rounded-tl-xl md:rounded-br-xl w-full hover:scale-105 transition duration-300"
      >
        <FaWhatsapp className="mr-2" /> Inquire Now
      </a>
    </div>
  );
};

export default ArtGalleryCard;
