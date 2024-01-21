/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import URL from "./url";
function Democard({ title, para }) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${URL}/api/courseFormData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          courseTitle: title,
          ...formData
        })
      });

      if (response.ok) {
        console.log("Course data sent successfully");
        // Reset the form data by updating the state
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: ""
        });
      } else {
        console.error("Failed to send course data");
      }
    } catch (error) {
      console.error("Error sending course data:", error);
    }
  };
  return (
    <section className="py-6 bg-gray-200 text-black">
      <div className="grid grid-cols-12 w-full mt-20 space-y-6 md:space-y-0 px-10 mx-auto lg:px-8">
        <div className="col-span-12 flex flex-col  justify-around md:col-span-8 md:py-0 md:px-3 ml-5">
          <h1 className="text-3xl  font-bold flex flex-col md:flex md:flex-row">
            {" "}
            <span className="text-blue-600 font-semibold">{title}</span>
            <span className="md:ml-2">COURSE</span>
          </h1>
          <p className="pt-2 pb-4">{para}</p>
          <div className="gap-y-6 gap-x-6 md:flex w-[60vw]">
            <div className="flex gap-4 md:gap-0 m-3 md:m-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col  items-center">
                <div>
                  <h1 className="text-base">Titans-Technology</h1>
                </div>
                <div className="text-yellow-300  scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 md:gap-0 m-3 md:m-0">
              <img
                src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-base">Titans-Technology</h1>
                </div>
                <div className="text-yellow-300 scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
            <div className="flex m-3 gap-4 md:gap-0 md:m-0">
              <img
                src="https://static-00.iconduck.com/assets.00/glassdoor-icon-512x512-3olkl9jp.png"
                alt=""
                className="h-12"
              />
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-base">Titans-Technology</h1>
                </div>
                <div className="text-yellow-300 scale-75 flex gap-1">
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                  <span className="material-symbols-sharp"> grade </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-4 md:space-y-0 md:flex justify-between w-2/4 mt-5">
              <ul className="flex flex-col gap-y-4">
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined"> handshake </span>
                  Hands on Training
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    date_range{" "}
                  </span>
                  Flexible Timings
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    monitoring{" "}
                  </span>
                  Industry Based Training
                </li>
              </ul>
              <ul className="flex flex-col gap-y-4">
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-sharp"> person </span>
                  Experienced Experts
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-outlined">
                    {" "}
                    currency_rupee{" "}
                  </span>
                  Affordable Fees
                </li>
                <li className="flex gap-6 w-72">
                  <span className="material-symbols-sharp">
                    {" "}
                    account_balance{" "}
                  </span>
                  Placement Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form
          className="flex bg-white px-6 rounded-xl col-span-12 md:col-span-4 flex-col py-6 space-y-3 md:py-8 md:px-8"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-center font-bold text-2xl md:text-3xl text-blue-500">
            <span className="text-black mr-2">Book Your</span>
            Free Demo Class
          </h1>
          {/* ... (existing code) */}
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <label className="block">
            <span className="mb-1">Number</span>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Your MO.Number"
              className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-blue-200"
            />
          </label>
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden border-1 border-blue-600 bg-blue-100 text-blue-600 hover:text-blue-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Submit</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Democard;

Democard.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string
};
