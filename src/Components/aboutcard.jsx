/* eslint-disable no-unused-vars */
import React from "react";
import Img2 from "../assets/6311736-removebg-preview.png";
function AboutCard() {
  return (
    <div>
      {" "}
      <h1 className="mt-6 text-2xl md:text-5xl text-blue-500 text-center">
        About Us
      </h1>
      <div className="md:flex w-full items-center md:mx-10 -mt-4 px-10">
        <div className="w-full md:w-2/4 px-5 md:pl-10">
          <h1 className="mt-6 text-xl md:text-4xl">Titans Technology</h1>
          <p className="text-justify text-xs md:text-sm mt-6">
            At Titans Technology, we embody values of excellence and purpose.
            Offering easy-to-follow upskilling in Data Science, Business
            Analytics, and Software Development, we also provide streamlined
            staffing solutions. Our commitment is to your growth, ensuring that
            within just 90 days of registering with us, you can land your dream
            job. Titans Technology makes it easy for you to succeed in the
            dynamic IT landscape, combining professional expertise with a
            straightforward pathway to achieving your aspirations. Join us for a
            transformative journey toward a fulfilling career in just 90 days!
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <img className="w-full" src={Img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
