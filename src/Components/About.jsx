import axios from "axios";
import React, { useEffect, useState } from "react";
import Response from "../config/Api";

const About = () => {
  const [name, setName] = useState();
  const [profession, setProfession] = useState();
  const [profile, setProfile] = useState();
  const [visitorCount, setVisitorCount] = useState(0); // State to hold the current visitor count
  const [targetCount, setTargetCount] = useState(0); // State to hold the target count from API
  const [about, setAbout] = useState();

  const [degree, setDegree] = useState();
  const [university, setUniversity] = useState();
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  const getData = async () => {
    try {
      const response = await Response();
      // console.log(response);

      setName(response.user.display_name);
      setProfession(response.user.profession);
      setProfile(response.user.profile_img);
      setTargetCount(response.user.websiteVisits);
      setAbout(response.artistInfo.overview); // Set about content
      setDegree(response.userDashboard.educationQualification); // Set degree
      setUniversity(response.userDashboard.university); // Set university
      setLocation({
        city: response.userDashboard.city,
        state: response.userDashboard.state,
        country: response.userDashboard.country,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const animateCounter = () => {
    // let count = 0;
    // const interval = setInterval(() => {
    //   if (count < targetCount) {
    //     count++;
    //     setVisitorCount(count); // Update the state with the new count
    //   } else {
    //     clearInterval(interval); // Stop the animation when the target is reached
    //   }
    // }, 10); // Adjust speed (lower number = faster)
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (targetCount > 0) {
      animateCounter();
    }
  }, [targetCount]);

  return (
    <section id="about">
      <div className="relative w-full flex flex-col w md:mt-[2%] overflow-hidden">
        {/* name and proffession */}
        <div className=" relative flex flex-col md:ml-[5.2%] text-[13.62vw] md:text-[4.16vw] w-full">
          <h1 className="font-[Poller One] font-[900] mx-auto">{name}</h1>
          <span className="font-[sacramento] mt-[-10%] md:mt-[-2%] ml-[53%] text-[#ED6C30] capitalize">
            {profession}
          </span>
        </div>

        {/* Image and About */}
        <div className="relative flex flex-col md:flex-row">
          {/* Image and visitiors count */}
          <div className=" relative flex flex-col w-full md:mt-[-5%]">
            <div className="relative flex">
              <img
                className="absolute inset-0 mt-[-10%] md:mt-[-10%] w-[79.24vw] md:w-[36.12vw] mx-auto"
                src="/images/frame1.svg"
                alt=""
              />
              <img
                className=" w-[57vw] md:w-[27vw] rounded-full md:mt-[-3%] mx-auto border border-[#ED6C30] border-[3vw] md:border-[1vw]"
                src={`https://admin.artpallatte.com/${profile}`}
                alt=""
              />
            </div>
            <div>
              <img
                className="absolute mt-[-10%] md:hidden"
                src="/images/stars.svg"
                alt=""
              />
              <div className="relative flex mt-[10%] text-[#006CA2] font-[600] text-[7.27vw] md:text-[2.78vw] mx-auto justify-center">
                <h3>
                  Total Visitors:{" "}
                  <span id="visitor-counter">{visitorCount}</span>
                </h3>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="relative flex flex-col w-full mt-[5%] md:mt-[0%]">
            <div className="w-full relative flex">
              <h2 className="text-[Poppins] mx-auto md:ml-[0%] text-[5.56vw] md:text-[2.09vw] font-[600] text-[#4B0082]">
                About Us
              </h2>
              <img
                className="absolute w-[18.34vw] ml-[50%] md:hidden"
                src="/images/arrow.svg"
                alt=""
              />
            </div>
            <div className="text-[3.34vw] mt-[5%] md:mt-[2%] w-[88.34vw] text-[#535454] mx-auto md:mx-[0] md:text-[1.39vw] md:w-[43.20vw] font-[600] text-[Poppins] text-center md:text-left">
              {about}
            </div>
            <div className="hidden md:flex w-[36vw] flex-col shadow-2xl rounded-xl px-[2%] py-[1%] mt-[3%]">
              <div className="flex py-[1%]">
                <svg
                  className="text-[#FE7A00] w-[1.83vw]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_52_5)">
                    <path
                      d="M1.17709 7.35313L9.60779 3.98438L18.0385 7.35313L9.60779 10.7219L1.17709 7.35313Z"
                      stroke="currentcolor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.0385 7.39725V11.0961M5.00946 9.12774V14.1175C5.00946 14.1175 6.93847 16.0156 9.6078 16.0156C12.2775 16.0156 14.2065 14.1175 14.2065 14.1175V9.12774"
                      stroke="currentcolor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <p className="text-[1.39vw] text-[#333333] ml-[2%]">{degree}</p>
              </div>

              <div className="flex py-[1%]">
                <svg
                  className="text-[#FE7A00] w-[1.83vw]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_52_5)">
                    <path
                      d="M15.5 4.5V5C15.5 5.0663 15.4737 5.12989 15.4268 5.17677C15.3799 5.22366 15.3163 5.25 15.25 5.25H14.5V5.625C14.5 5.83209 14.3321 6 14.125 6H1.875C1.66791 6 1.5 5.83209 1.5 5.625V5.25H0.75C0.683696 5.25 0.620107 5.22366 0.573223 5.17677C0.526339 5.12989 0.5 5.0663 0.5 5V4.5C0.5 4.45054 0.514671 4.40219 0.542156 4.36107C0.569641 4.31995 0.608706 4.28791 0.654406 4.269L7.90441 1.519C7.96562 1.49367 8.03438 1.49367 8.09559 1.519L15.3456 4.269C15.3913 4.28791 15.4304 4.31995 15.4578 4.36107C15.4853 4.40219 15.5 4.45054 15.5 4.5ZM14.75 14H1.25C0.835781 14 0.5 14.3358 0.5 14.75V15.25C0.5 15.3163 0.526339 15.3799 0.573223 15.4268C0.620107 15.4737 0.683696 15.5 0.75 15.5H15.25C15.3163 15.5 15.3799 15.4737 15.4268 15.4268C15.4737 15.3799 15.5 15.3163 15.5 15.25V14.75C15.5 14.3358 15.1642 14 14.75 14ZM3 6.5V12.5H1.875C1.66791 12.5 1.5 12.6679 1.5 12.875V13.5H14.5V12.875C14.5 12.6679 14.3321 12.5 14.125 12.5H13V6.5H11V12.5H9V6.5H7V12.5H5V6.5H3Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
                <p className="text-[1.39vw] text-[#333333] ml-[2%]">
                  {university}
                </p>
              </div>
              <div className="flex py-[1%]">
                <svg
                  className="text-[#FE7A00] w-[1.83vw]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_52_5)">
                    <path
                      d="M6.74333 15.0407C7.14733 15.374 7.56867 15.6787 8 15.976C8.43226 15.6826 8.85155 15.3706 9.25667 15.0407C9.932 14.4862 10.5676 13.8849 11.1587 13.2414C12.5213 11.7514 14 9.59135 14 7.16669C14 6.37876 13.8448 5.59854 13.5433 4.87059C13.2417 4.14263 12.7998 3.4812 12.2426 2.92405C11.6855 2.36689 11.0241 1.92494 10.2961 1.62341C9.56815 1.32188 8.78793 1.16669 8 1.16669C7.21207 1.16669 6.43185 1.32188 5.7039 1.62341C4.97595 1.92494 4.31451 2.36689 3.75736 2.92405C3.20021 3.4812 2.75825 4.14263 2.45672 4.87059C2.15519 5.59854 2 6.37876 2 7.16669C2 9.59135 3.47867 11.7507 4.84133 13.2414C5.43241 13.8851 6.06798 14.486 6.74333 15.0407ZM8 9.33335C7.42536 9.33335 6.87426 9.10508 6.46794 8.69875C6.06161 8.29242 5.83333 7.74132 5.83333 7.16669C5.83333 6.59205 6.06161 6.04095 6.46794 5.63462C6.87426 5.22829 7.42536 5.00002 8 5.00002C8.57464 5.00002 9.12574 5.22829 9.53206 5.63462C9.93839 6.04095 10.1667 6.59205 10.1667 7.16669C10.1667 7.74132 9.93839 8.29242 9.53206 8.69875C9.12574 9.10508 8.57464 9.33335 8 9.33335Z"
                      fill="currentcolor"
                    />
                  </g>
                </svg>
                <p className="text-[1.39vw] text-[#333333] ml-[2%]">
                  {location.city}, {location.state} {location.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
