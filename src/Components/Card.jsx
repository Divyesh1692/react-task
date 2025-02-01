import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card = ({ card, index, expandedCard, toggleExpand }) => {
  const isExpanded = expandedCard === index;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardWidth = windowWidth > 768 ? "20.84vw" : "47.78vw"; // Desktop vs. Mobile

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.div
      className={`rounded-2xl shadow-lg bg-white p-4 mx-2 mb-[8%] `}
      style={{
        backgroundImage: "url(/images/stars.svg)",
        minHeight: "auto",
        width: cardWidth,
        overflow: "hidden",
      }}
      animate={{ height: isExpanded ? "auto" : "auto" }} // Expands only from bottom
      transition={{ type: "spring", duration: 0.5 }}
    >
      <img
        className="w-[11.67vw] md:w-[7.28vw] mx-auto"
        src={card.image}
        alt=""
      />
      <h2 className="text-[4.45vw] md:text-[1.74vw] my-[5%] text-[#333333] font-bold text-center">
        {card.title}
      </h2>
      <div className="text-center text-[#535454] text-[3.89vw] md:text-[1.39vw]">
        <p className="my-[2%]">{card.content[1]}</p>
        <p className="my-[2%]">{card.content[2]}</p>
        <p className="my-[2%]">{card.content[3]}</p>
      </div>

      {isExpanded && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className=" text-gray-600"
        >
          <div className="text-center text-[#535454] text-[3.89vw] md:text-[1.39vw]">
            <p className="my-[2%]">{card.content[1]}</p>
            <p className="my-[2%]">{card.content[2]}</p>
            <p className="my-[2%]">{card.content[3]}</p>
          </div>
        </motion.p>
      )}

      <button
        onClick={() => toggleExpand(index)}
        className={`mt-4 text-[3.89vw] md:text-[1.12vw] font-[500]  flex justify-center mx-auto md:w-[7.57vw] text-[${card.color}]`}
      >
        {isExpanded ? "Show Less" : "Show +5 More"}
      </button>
    </motion.div>
  );
};

export default Card;
