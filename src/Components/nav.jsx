/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import img from "../assets/TITANS logo.png";
import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [openMenus, setOpenMenus] = useState({});

  const handleMenuClick = (menu) => {
    setOpenMenus((prevMenus) => {
      // Close all other menus and toggle the clicked menu
      const newMenus = {};
      Object.keys(prevMenus).forEach((key) => {
        newMenus[key] = key === menu ? !prevMenus[key] : false;
      });
      return newMenus;
    });
  };

  const handleOutsideClick = (e) => {
    // Close all open menus if clicking outside the navigation
    if (!e.target.closest(".navbar-start")) {
      setOpenMenus({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="navbar bg-base-100 md:fixed z-[100] border-b border-black md:px-28">
      <div className="navbar-start w-full flex justify-between items-center">
        <div className="dropdown lg:flex">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm lg:flex lg:items-center dropdown-content mt-3 z-[1] p-4 space-y-1 shadow bg-base-100 rounded-box lg:w-auto"
          >
            <li>
              <Link className="p-3" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="p-3" to="/about">
                About
              </Link>
            </li>

            <li className="space-y-16">
              <details className="w-60">
                <summary className="p-3">Courses</summary>
                <ul>
                  <li>
                    <details>
                      <summary className="p-3">
                        DATA INTELLIGENCE SPECIALIZATION
                      </summary>
                      <ul>
                        <li>
                          <Link className="p-3" to="/course/Data Analytics">
                            Data Analytics
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3" to="/course/Data Science">
                            Data Science
                          </Link>
                        </li>
                      </ul>
                    </details>
                    <details>
                      <summary className="p-3">WEB DEVELOPEMENT</summary>
                      <ul>
                        <li>
                          <Link
                            className="p-3"
                            to="/course/MERN Stack Development"
                          >
                            MERN Stack Development
                          </Link>
                        </li>
                      </ul>
                    </details>
                    <details>
                      <summary className="p-3">
                        BUSINESS & PROJECT LEADERSHIP
                      </summary>
                      <ul>
                        <li>
                          <Link className="p-3" to="/course/Business Analytics">
                            Business Analytics
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3" to="/course/Project Manager">
                            Project Manager
                          </Link>
                        </li>
                        <li>
                          <Link className="p-3" to="/course/Scrum Master">
                            Scrum Master
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="p-3">Services</summary>
                <ul>
                  <li className="">
                    <details>
                      <summary className="p-3">
                        STAFFING & RECRUITMENT SERVICES
                      </summary>
                      <ul>
                        <li>
                          <Link className="p-3" to="/services/USA IT STAFFING">
                            USA IT STAFFING
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="p-3"
                            to="/services/CANADA IT STAFFING"
                          >
                            CANADA IT STAFFING
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            className="p-3"
                            to="/services/TALENT ACQUISITION"
                          >
                            TALENT ACQUISITION
                          </Link>
                        </li> */}
                      </ul>
                    </details>
                    {/* <details>
                      <summary className="p-3">
                        SOFTWARE DEVELOPMENT SERVICES
                      </summary>
                      <ul>
                        <li>
                          <Link
                            className="p-3"
                            to="/services/WEBSITE DEVELOPMENT"
                          >
                            WEBSITE DEVELOPMENT
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="p-3"
                            to="/services/MOBILE APPLICATIONS DEVELOPMENT"
                          >
                            MOBILE APPLICATIONS DEVELOPMENT
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="p-3"
                            to="/services/CUSTOMIZED PLATFORMS"
                          >
                            CUSTOMIZED PLATFORMS
                          </Link>
                        </li>
                      </ul>
                    </details>
                    <details>
                      <summary className="p-3">CLOUD SERVICES</summary>
                      <ul>
                        <li>
                          <Link className="p-3" to="/services/DEVOPS SERVICES">
                            DEVOPS SERVICES
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="p-3"
                            to="/services/ON-DEMAND CLOUD SERVICES"
                          >
                            ON-DEMAND CLOUD SERVICES
                          </Link>
                        </li>
                      </ul>
                    </details> */}
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="p-3" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <img className="h-8 lg:ml-10" src={img} alt="" />
        </div>
      </div>
      <div className="navbar-center w-fit hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:absolute left-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <details>
              <summary>Courses</summary>
              <ul className="w-96">
                <li>
                  <details>
                    <summary>DATA INTELLIGENCE SPECIALIZATION</summary>
                    <ul>
                      <li>
                        <Link to="/course/Data Analytics">Data Analytics</Link>
                      </li>
                      <li>
                        <Link to="/course/Data Science">Data Science</Link>
                      </li>
                    </ul>
                  </details>
                  <details>
                    <summary>WEB DEVELOPEMENT</summary>
                    <ul>
                      <li>
                        <Link to="/course/MERN Stack Development">
                          Full Stack Development
                        </Link>
                      </li>
                    </ul>
                  </details>
                  <details>
                    <summary>BUSINESS & PROJECT LEADERSHIP</summary>
                    <ul>
                      <li>
                        <Link to="/course/Business Analytics">
                          Business Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/course/Project Manager">
                          Project Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/course/Scrum Master">Scrum Master</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="w-96">
                <li className="">
                  <details>
                    <summary>STAFFING & RECRUITMENT SERVICES</summary>
                    <ul>
                      <li>
                        <Link to="/services/USA IT STAFFING">
                          USA IT STAFFING
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/CANADA IT STAFFING">
                          CANADA IT STAFFING
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/services/TALENT ACQUISITION">
                          TALENT ACQUISITION
                        </Link>
                      </li> */}
                    </ul>
                  </details>
                  {/* <details>
                    <summary>SOFTWARE DEVELOPMENT SERVICES</summary>
                    <ul>
                      <li>
                        <Link to="/services/WEBSITE DEVELOPMENT">
                          WEBSITE DEVELOPMENT
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/MOBILE APPLICATIONS DEVELOPMENT">
                          MOBILE APPLICATIONS DEVELOPMENT
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/CUSTOMIZED PLATFORMS">
                          CUSTOMIZED PLATFORMS
                        </Link>
                      </li>
                    </ul>
                  </details>
                  <details>
                    <summary>CLOUD SERVICES</summary>
                    <ul>
                      <li>
                        <Link to="/services/DEVOPS SERVICES">
                          DEVOPS SERVICES
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ON-DEMAND CLOUD SERVICES">
                          ON-DEMAND CLOUD SERVICES
                        </Link>
                      </li>
                    </ul>
                  </details> */}
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
