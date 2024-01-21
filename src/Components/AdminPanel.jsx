// Import necessary modules
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "./url";
import { validCredentials } from "../password";

const AdminPanel = () => {
  const [contactData, setContactData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [selectedData, setSelectedData] = useState("contact"); // Default to contact data
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc
  const [sortBy, setSortBy] = useState("date"); // column to sort by
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    // Fetch contact data
    axios.get(`${URL}/api/getAllContacts`).then((response) => {
      setContactData(response.data);
    });

    // Fetch course data
    axios.get(`${URL}/api/getAllCourseData`).then((response) => {
      setCourseData(response.data);
    });
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    // Update filtered data when the search term changes
    const filterData = (data) =>
      data.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

    setFilteredData(
      selectedData === "contact"
        ? filterData(contactData)
        : filterData(courseData)
    );
  }, [searchTerm, contactData, courseData, selectedData]);

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${URL}/api/contact/${id}`);
      // Update the contact data after deletion
      setContactData(contactData.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Failed to delete contact:", error);
    }
  };

  const handleDeleteCourseData = async (id) => {
    try {
      await axios.delete(`${URL}/api/courseFormData/${id}`);
      // Update the course data after deletion
      setCourseData(courseData.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Failed to delete course data:", error);
    }
  };

  const handleSort = (column) => {
    // Toggle sort order when clicking on a column header
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortBy(column);
  };

  const handleLogin = () => {
    // Replace with your actual credentials
    const { username: validUsername, password: validPassword } =
      validCredentials;

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoggedIn(false);
      setLoginError("Invalid username or password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="w-screen bg-blue-100 h-[80vh] flex flex-col items-center justify-center py-12">
        <div className="w-fit bg-white  flex flex-col items-center justify-center border-2 rounded-2xl p-8">
          <h1 className="text-3xl font-semibold mb-6">Admin Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
      </div>
    );
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center pt-28">
      <h1 className="text-3xl font-semibold mb-6">
        Admin Panel - Data Management
      </h1>

      <div className="mb-6 w-full px-20">
        <div className="flex mb-4">
          <button
            onClick={() => setSelectedData("contact")}
            className={`mr-4 ${
              selectedData === "contact"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } px-4 py-2 rounded-md focus:outline-none`}
          >
            Contact Data
          </button>
          <button
            onClick={() => setSelectedData("course")}
            className={`${
              selectedData === "course"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } px-4 py-2 rounded-md focus:outline-none`}
          >
            Course Data
          </button>
        </div>

        <div className="mb-4 w-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md mr-4 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-md mr-4 focus:outline-none"
            onChange={(e) => setSortBy(e.target.value)}
          >
            {selectedData === "contact" ? (
              <>
                <option value="date">Date</option>
                <option value="Name">Name</option>
                <option value="Email">Email</option>
                <option value="Country">Country</option>
                <option value="Number">Number</option>
                <option value="Message">Message</option>
              </>
            ) : (
              <>
                <option value="date">Date</option>
                <option value="courseTitle">Course Title</option>
                <option value="fullName">Full Name</option>
                <option value="emailAddress">Email Address</option>
                <option value="phoneNumber">Phone Number</option>
              </>
            )}
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
            onClick={() => handleSort(sortBy)}
          >
            {`Sort ${sortOrder === "asc" ? "Ascending" : "Descending"}`}
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          {selectedData === "contact" ? "Contact Data" : "Course Data"}
        </h2>

        <table className="w-full px-10 bg-white border border-gray-300">
          {/* Table Header */}
          <thead>
            <tr>
              {selectedData === "contact" ? (
                <>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("date")}
                  >
                    Date
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("Name")}
                  >
                    Name
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("Email")}
                  >
                    Email
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("Country")}
                  >
                    Country
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("Number")}
                  >
                    Number
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("Message")}
                  >
                    Message
                  </th>
                </>
              ) : (
                <>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("date")}
                  >
                    Date
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("courseTitle")}
                  >
                    Course Title
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("fullName")}
                  >
                    Full Name
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("emailAddress")}
                  >
                    Email Address
                  </th>
                  <th
                    className="py-2 px-4 border-b cursor-pointer"
                    onClick={() => handleSort("phoneNumber")}
                  >
                    Phone Number
                  </th>
                </>
              )}
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredData.map((data) => (
              <tr key={data._id}>
                {selectedData === "contact" ? (
                  <>
                    <td className="py-2 px-4 border-b">
                      {new Date(data.dateOfSubmission).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 border-b">{data.Name}</td>
                    <td className="py-2 px-4 border-b">{data.Email}</td>
                    <td className="py-2 px-4 border-b">{data.Country}</td>
                    <td className="py-2 px-4 border-b">{data.Number}</td>
                    <td className="py-2 px-4 border-b">{data.Message}</td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-4 border-b">
                      {new Date(data.dateOfSubmission).toLocaleString()}
                    </td>
                    <td className="py-2 px-4 border-b">{data.courseTitle}</td>
                    <td className="py-2 px-4 border-b">{data.fullName}</td>
                    <td className="py-2 px-4 border-b">{data.emailAddress}</td>
                    <td className="py-2 px-4 border-b">{data.phoneNumber}</td>
                  </>
                )}
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() =>
                      selectedData === "contact"
                        ? handleDeleteContact(data._id)
                        : handleDeleteCourseData(data._id)
                    }
                    className="text-red-500 hover:text-red-700 ml-2 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
