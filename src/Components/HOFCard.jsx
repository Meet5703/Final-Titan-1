// eslint-disable-next-line no-unused-vars
import React from "react";

function HOFCard() {
  return (
    <div
      className="items-center h-screen w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
          <span className="block w-full">HALL OF FRAMES</span>
        </h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          We are proud of our achievers to have proved their success through
          hard-work and dedication which has enabled them to make their dreams
          come true. You too can be part of the PW Skills achiever group only if
          you stay consistent and be determined.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
          >
            <span>SHARE YOUR STORY</span>
          </a>
        </div>
      </div>

      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="https://halloffame.pwskills.com/images/hall-of-fame-hero-img.svg"
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
}

export default HOFCard;
