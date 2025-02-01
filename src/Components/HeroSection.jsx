import { useState, useEffect } from "react";
import axios from "axios";
import Response from "../config/Api";

const HeroSection = () => {
  const [expandedIcon, setExpandedIcon] = useState(null); // Track which icon is expanded
  const [bannerImage, setBannerImage] = useState("");
  const [degree, setDegree] = useState();
  const [university, setUniversity] = useState();
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  // Fetch the banner image from the API
  const fetchBannerImage = async () => {
    try {
      const response = await Response();

      setBannerImage(response.userDashboard.bannerImage); // Set banner image
      setDegree(response.userDashboard.educationQualification); // Set degree
      setUniversity(response.userDashboard.university); // Set university
      setLocation({
        city: response.userDashboard.city,
        state: response.userDashboard.state,
        country: response.userDashboard.country,
      }); // Set location
    } catch (error) {
      console.error("Error fetching banner image:", error);
      // Fallback image in case of error
    }
  };

  useEffect(() => {
    fetchBannerImage();
  }, []);

  // Function to handle icon click
  const handleIconClick = (icon) => {
    setExpandedIcon(expandedIcon === icon ? null : icon); // Toggle expansion
  };

  return (
    <section className="relative w-full  overflow-hidden flex  justify-center">
      {/* Background Image */}
      <div className="relative md:w-[100vw] md:h-[45vw] w-[90.84vw] h-[85.5vw] mx-auto overflow-x-hidden">
        <img
          className="md:w-[100vw] md:h-[45vw] object-cover w-[90.84vw] h-[62.5vw] mx-auto rounded-2xl md:rounded-none mt-[22%] md:mt-0"
          src={`https://admin.artpallatte.com/${bannerImage}`}
          alt="Banner"
        />
        <div className="absolute rounded-2xl md:rounded-none bg-black md:inset-0 inset-[23.5%_0%] opacity-[20%] md:w-[100vw] md:h-[45vw] w-[90.84vw] h-[62.5vw]"></div>

        {/* Left-Side Icons (Mobile View) */}
        <div className="absolute left-[-1%] top-[46vw] flex flex-col space-y-4 md:hidden">
          {/* Degree Icon */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => handleIconClick("degree")}
          >
            <div className="h-[8.34vw]  bg-gray-300/50 rounded-xl flex items-center justify-center text-black transition-all duration-500">
              {/* Icon Image */}
              <div className="h-[8.34vw] w-[6.12vw] flex items-center">
                <img
                  className="w-[5.35vw] h-[5.35vw] ml-[3vw] object-cover"
                  src="/logos/degree.svg"
                  alt="Degree Icon"
                />
              </div>

              {/* Expanding Text with Smooth Effect */}
              <div
                className={`justify-center text-white ml-[5vw] text-[3.5vw] whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIcon === "degree"
                    ? "w-auto opacity-100  scale-100 pr-[20%]"
                    : "w-0 opacity-0 max-w-0 scale-90"
                }`}
              >
                {degree}
              </div>
            </div>
          </div>

          {/* University Icon */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => handleIconClick("university")}
          >
            <div className="h-[8.34vw] bg-gray-300/50 rounded-xl flex items-center text-black transition-all duration-500">
              {/* Icon Image */}
              <div className="h-[8.34vw] w-[6.12vw] flex items-center">
                <img
                  className="w-[5.35vw] h-[5.35vw] object-cover ml-[3vw]"
                  src="/logos/university.svg"
                  alt="University Icon"
                />
              </div>

              {/* Expanding Text with Smooth Effect */}
              <div
                className={`justify-center text-white text-[3.5vw] whitespace-nowrap ml-[5vw] overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIcon === "university"
                    ? "w-auto opacity-100 scale-100 pr-[20%]"
                    : "w-0 opacity-0 max-w-0 scale-90"
                }`}
              >
                {university}
              </div>
            </div>
          </div>

          {/* Location Icon */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => handleIconClick("location")}
          >
            <div className="h-[8.34vw] bg-gray-300/50 rounded-xl flex items-center text-black transition-all duration-300">
              {/* Icon Image */}
              <div className="h-[8.34vw] w-[6.12vw] flex items-center">
                <img
                  className="w-[5.35vw] h-[5.35vw] ml-[3vw] object-cover"
                  src="/logos/location.svg"
                  alt="Location Icon"
                />
              </div>

              {/* Expanding Text with Smooth Effect */}
              <div
                className={`justify-center text-white text-[3.5vw] ml-[5vw] whitespace-nowrap transition-all duration-500 ease-in-out ${
                  expandedIcon === "location"
                    ? "w-auto opacity-100 scale-100 pr-[20%]"
                    : "w-0 opacity-0 max-w-0 scale-90"
                }`}
              >
                {location.city}, {location.state} {location.country}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
