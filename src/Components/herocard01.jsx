/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Upskill from "../assets/Upskill.png";

const HeroCard1 = () => {
  const [alternateContent, setAlternateContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlternateContent((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#EDF6FF]">
      <div
        className="  items-center h-full mt-20 w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-blue-900 lg:text-2xl">
            <span className="block w-full text-left">
              {alternateContent === 0
                ? "Innovative IT Solutions, Empowering Success with Data Intelligence Excellence"
                : alternateContent === 1
                ? "Unlock Your Potential: Seamlessly Enhance Your Skills with Our IT Upskilling Training."
                : "Connecting Talent, Fostering Success: Your Future Starts with Our Placement Expertise."}
            </span>
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            {alternateContent === 0
              ? "Empower your business with our innovative IT solutions, delivering excellence in data analytics. From streamlined services to actionable insights, we pave the way for your success in the digital landscape."
              : alternateContent === 1
              ? "Level Up Your Skills! Join our IT Upskilling Training for a friendly yet professional learning experience. Boost your career effortlessly and stay ahead in the tech game. Your success story starts here!"
              : "Fulfill your career aspirations with our expert placement solutions, where talent meets opportunity. At our core, we connect potential and foster success, shaping the path toward a brighter future."}
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
            >
              <span>Explore More</span>
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src={
              alternateContent === 0
                ? "https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149387394.jpg?w=740&t=st=1705602626~exp=1705603226~hmac=d09c17d43fddfb8dfc1a2768df89d4d211670803370316d41872f142c1bc73d3"
                : alternateContent === 1
                ? Upskill
                : "https://img.freepik.com/free-vector/isometric-characters-illustration-human-resources-doing-interview_1284-24421.jpg?w=740&t=st=1705600566~exp=1705601166~hmac=0427ae25edfc232908e22198979984614d87455ed3d04db313d80df9ef43e2df"
            }
            alt={
              alternateContent === 0
                ? "New Awesome hero image"
                : alternateContent === 1
                ? "Awesome hero page image"
                : "img"
            }
            width="500"
            height="488"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard1;
