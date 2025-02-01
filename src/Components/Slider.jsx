import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Card from "./Card";

const Slider = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: "/logos/moa.svg",
      title: "Media of Arts",
      content: { 1: "Acrylic", 2: "Oil Color", 3: "Pencil Color" },
      color: "#FF5201",
    },
    {
      id: 2,
      image: "/logos/waoa.svg",
      title: "Work area of Arts",
      content: { 1: "Drawing", 2: "Painting", 3: "Sculpture" },
      color: "#006CA2",
    },
    {
      id: 3,
      image: "/logos/toa.svg",
      title: "Themes of Arts",
      content: { 1: "Abstract", 2: "Portrait", 3: "Landscape" },
      color: "#4B0082",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="w-[92vw] md:w-[69.45vw] mx-auto  mt-[5%] ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.7} // Slight overlap effect
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={card.id} className="w-[52vw] md:w-[23vw]">
            <Card
              card={card}
              index={index}
              expandedCard={expandedCard}
              toggleExpand={toggleExpand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
