/* eslint-disable no-unused-vars */
import React from "react";

function Webinar() {
  return (
    <div className="w-full h-fit space-y-10">
      <h1 className="text-center h-fit md:text-3xl">
        JOIN OUR FREE UPCOMING WEBINAR
      </h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 px-10">
        <div className="row-span-1 col-span-1">
          <img
            src="https://helixtechinc.com/assets/videos/trainingwebinar.png"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-1 text-justify">
          <p>
            At Helix Tech IT Solutions Inc, we believe that the success of a
            company is rooted in the talents and aspirations of its employees.
            We are committed to creating a positive impact on the tech industry
            by bridging the gap between top tech talent and companies while
            empowering job seekers to achieve their career aspirations. We
            believe in creating a thriving ecosystem where technology and
            innovation comes to life.
          </p>
          <button className="mt-14 relative h-[50px] w-40 overflow-hidden border-1 border-blue-600 bg-blue-100 text-blue-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-400 hover:before:w-2/4 hover:before:bg-blue-400 hover:after:w-2/4 hover:after:bg-blue-400">
            <span className="relative z-10">IM READY TO GET IN</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Webinar;
