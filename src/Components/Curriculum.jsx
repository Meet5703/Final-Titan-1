/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Curriculum({ sections }) {
  return (
    <div className="w-full grid md:grid-cols-2 mt-20">
      <div className="col-span-1 px-24 justify-start">
        <h1 className="text-3xl">Course Curriculum</h1>
        <div className="py-3">
          {sections.map((section, index) => (
            <details key={index} className="mb-2">
              <summary className="bg-blue-50 border-blue-950 border-1 text-blue-950 focus:border-2 focus:border-blue-500 focus:text-blue-500 transition-all duration-75 p-3 rounded-lg cursor-pointer shadow-md mb-4">
                <span className="font-semibold">{section.title}</span>
              </summary>
              <ul className="ml-8 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-blue-950"
                  >
                    <span className="material-symbols-outlined border-2 border-black rounded-full scale-50">
                      arrow_right_alt{" "}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
      <div>
        <div className="ml-[16%] md:ml-28 bg-blue-50 w-fit px-6 pt-8 space-y-6 rounded-2xl border-b-4 drop-shadow-xl shadow-black border-blue-600 pb-20 col-span-1">
          <strong>
            <h1 className="border-b-2 pb-8 md:text-xl border-blue-300 text-blue-600">
              PROFESSIONAL CERTIFICATE
            </h1>
          </strong>
          <div>
            <h2 className="text-xl">Beginner level</h2>
            <p className="text-sm">No previous experience necessary</p>
          </div>
          <div>
            <h2 className="text-xl">Course Session</h2>
            <p className="text-sm">20 Days 1 Hour per day</p>
          </div>
          <div>
            <h2 className="text-xl">Flexible schedule</h2>
            <p className="text-sm">Learn at your own pace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Curriculum.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default Curriculum;
