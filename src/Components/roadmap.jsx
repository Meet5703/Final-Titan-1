/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Roadmap = ({ title, content, content2, setsOfParas }) => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-base md:text-3xl w-full md:w-2/3 px-8 md:px-4">
          {title}
        </h1>
        <p className="text-xs text-justify mx-8 md:text-xl md:text-center">
          {content}
        </p>
        <p className="text-xs text-justify mx-8 md:text-xl md:text-center uppercase font-bold">
          {content2}
        </p>
      </div>
      <div className="container items-center md:ml-8">
        <div className="flex flex-col w-full scale-90 md:grid grid-cols-9  p-2 text-blue-50">
          {setsOfParas.map((set, setIndex) => (
            <React.Fragment key={setIndex}>
              {/* Render Left Paragraphs */}
              {set.leftParas.map((paragraph, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse mr-6 md:contents"
                >
                  <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-semibold text-lg md:text-4xl text-center mb-1 ">
                      {paragraph.title}
                    </h3>
                    <p className="leading-tight text-justify text-xs md:text-lg">
                      {paragraph.description}
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                </div>
              ))}

              {/* Render Right Paragraphs */}
              {set.rightParas.map((paragraph, index) => (
                <div key={index} className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                  </div>
                  <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-semibold  mb-1 text-lg md:text-4xl text-center">
                      {paragraph.title}
                    </h3>
                    <p className="leading-tight text-justify text-xs md:text-lg">
                      {paragraph.description}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

Roadmap.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  content2: PropTypes.string,
  setsOfParas: PropTypes.arrayOf(
    PropTypes.shape({
      leftParas: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string
        })
      ),
      rightParas: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  )
};

export default Roadmap;
