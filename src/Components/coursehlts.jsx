/* eslint-disable no-unused-vars */
import React from "react";
import Img2 from "../assets/6311736-removebg-preview.png";
import PropTypes from "prop-types";
function Coursehlts({ title, p1, p2, p3 }) {
  return (
    <div>
      {" "}
      <h1 className="mt-6 text-2xl md:text-5xl text-blue-500 text-center">
        Course Highlights
      </h1>
      <div className="md:flex w-full justify-center items-center mx-10 mt-10">
        <div className="w-full md:w-1/2 md:pr-10">
          <img className="w-full" src={Img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Coursehlts;
Coursehlts.propTypes = {
  title: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string
};
