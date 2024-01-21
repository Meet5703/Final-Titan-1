/* eslint-disable no-unused-vars */
import React from "react";
import Img3 from "../assets/3515888.jpg";

function Jobcard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mx-20 items-center">
      <div className="col-span-1 md:col-span-3 space-y-6">
        <p className="text-xl md:text-3xl">
          <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2 text-2xl md:text-4xl">
            GET 100%
          </span>
          JOB PLACEMENT BY ENROLLING IN CERTIFIED TRAINING COURSE
        </p>
        <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border-1 border-blue-500 bg-blue-100 px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
          <span className="relative z-10">Swipe</span>
        </button>
      </div>
      <div className="col-span-1 md:col-span-3">
        <img src={Img3} alt="" />
      </div>
    </div>
  );
}

export default Jobcard;
