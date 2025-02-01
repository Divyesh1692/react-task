import React, { useEffect, useState } from "react";
// Assuming Achievement component is in the same folder
import Response from "../config/Api";
import Achievement from "./Achievement";

const Achievements = () => {
  // State to hold achievements data
  const [achievementsData, setAchievementsData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch data from the API
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        // Replace the URL with your actual API endpoint
        const response = await Response();
        console.log(response.achievements.achievements);

        setAchievementsData(response.achievements.achievements);
        console.log(achievementsData);
        // Set data to state
        setLoading(false);
      } catch (err) {
        setError(err.message); // Set error message
      }
    };

    fetchAchievements(); // Call the function when the component mounts
  }, []); // Empty dependency array means this runs only once when component mounts

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If error, show the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section
      id="achievements"
      className="relative mt-[15%] md:mt-[2%] overflow-hidden"
    >
      <div className="absolute flex flex-col md:hidden object-cover w-[100vw] mt-[-5%]">
        <img
          className=" md:hidden object-cover w-[100vw] "
          src="/images/stars.svg"
          alt="Stars Background"
        />
        <img
          className=" md:hidden object-cover w-[100vw] "
          src="/images/stars.svg"
          alt="Stars Background"
        />
      </div>

      <div className="w-full relative flex justify-center">
        <h2 className="text-[Poppins] text-[5.56vw] md:text-[3.125vw] font-[600] text-[#4B0082]">
          Achievements
        </h2>
        <img
          className="absolute w-[18.34vw] ml-[30%] md:hidden"
          src="/images/arrow.svg"
          alt="Arrow"
        />
      </div>

      <div className="text-[3.34vw] mt-[5%] md:mt-[2%] w-[88.34vw] md:w-[75vw] mx-auto text-[#535454] md:text-[1.39vw] font-[600] text-center">
        You’ve contributed to the global art community Art Pallatte and
        showcased creativity through inspiring projects.
      </div>

      {/* Mapping over the achievements and rendering the Achievement component */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 mx-auto   justify-center items-center    gap-8 mx-auto flex">
        {achievementsData.map((achievement, index) => (
          <Achievement
            key={index}
            img={achievement.imageUrl}
            title={achievement.title}
            date={achievement.date}
            desc={achievement.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
