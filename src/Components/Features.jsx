/* eslint-disable no-unused-vars */
import React from "react";

function Features() {
  return (
    <div className="flex w-full justify-center flex-wrap">
      <div className="parent">
        <div className="card">
          <div className="content-box bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
            <span className="card-title">COURSE KEY FEATURES</span>
            <p className="card-content">
              DevOps emphasizes collaboration and communication between
              development and operations teams
            </p>
            <p className="card-content">
              DevOps practices, such as continuous integration and continuous
              deployment
            </p>
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="card">
          <div className="content-box bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
            <span className="card-title">SKILLS COVERED</span>
            <ul className="card-content">
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                Automation
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                Version Control
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                Scripting and Coding
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="card">
          <div className="content-box bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
            <span className="card-title">JOB ROLES</span>
            <ul className="card-content">
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                DevOps Engineer
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                Release Engineer
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined border-2 border-white rounded-full scale-50">
                  arrow_right_alt{" "}
                </span>
                Build Engineer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
