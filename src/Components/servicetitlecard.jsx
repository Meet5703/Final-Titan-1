/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function ServiceTitleCard({ title, title2 }) {
  return (
    <div className="bg-blue-50 h-fit w-fit">
      <div className="p-10 h-fit">
        <div className=" custom-img h-[27vh] object-cover ba">
          <div>
            <h1 className="ml-[10%] h-full  md:ml-[35%] md:pt-16 pt-8 text-sm md:text-2xl w-screen md:w-1/3  font-semibold md:px-10">
              <span className=" absolute w-2/5 text-center left-[30%] top-[116px]  md:top-10">
                {title}
                <span className="text-blue-500 font-bold ml-2">{title2}</span>
              </span>
            </h1>
          </div>
        </div>
        <hr className="mt-6" />
      </div>
    </div>
  );
}
ServiceTitleCard.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string
};
export default ServiceTitleCard;
