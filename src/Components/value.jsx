/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const ValueCard = ({ title, title2, title3, items, items2 }) => {
  return (
    <div>
      <div className="bg-gray-100">
        <h1 className="text-center font-bold text-xl md:text-4xl px-8 py-6">
          {title}
          <span className="text-blue-600 ml-2">{title2}</span>
        </h1>
        <p className="text-justify ml-[5%] px-8 md:ml-[10%]">{title3}</p>
        <div className="w-full flex flex-col  items-center gap-10 bg-gray-100 p-10">
          <div className="flex flex-col md:flex-row justify-center w-full gap-6">
            <ul className="space-y-8 ">
              {items.map((item, index) => (
                <li key={index}>
                  <div className="rounded h-fit w-fit p-4 md:w-[40vw] md:h-44 shadow-lg hover:shadow-md hover:shadow-blue-700">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-bold text-blue-700">
                        {item.title}
                      </h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-8 ">
              {items2.map((items2, index) => (
                <li key={index}>
                  <div className="rounded h-fit w-fit p-4 md:w-[40vw] md:h-44 shadow-lg hover:shadow-md hover:shadow-blue-700">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-bold text-blue-700">
                        {items2.title}
                      </h2>
                      <p className="text-gray-600">{items2.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ValueCard.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  items2: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default ValueCard;
