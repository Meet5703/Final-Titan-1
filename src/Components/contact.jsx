import { useState } from "react";
import URL from "./url";
const Contact = () => {
  const [contact, setContact] = useState({
    Name: "",
    Email: "",
    Country: "",
    Number: "",
    Message: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "select-one"
        ? e.target.selectedOptions[0].value
        : e.target.value;

    setContact({
      ...contact,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.Country === "") {
      console.error("Please select a valid country");
      return;
    }

    try {
      const response = await fetch(`${URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });

      if (response.ok) {
        console.log("Data sent successfully");

        // Reset the form data by updating the state
        setContact({
          Name: "",
          Email: "",
          Country: "U.S", // Set the default country to "U.S"
          Number: "",
          Message: ""
        });
      } else {
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <div>
      <div className="font-sans max-w-6xl  mx-auto  bg-[rgb(225,231,255)] relative pt-32 rounded-3xl shadow-[0 2px 10px -3px rgba(6,81,237,0.3)] overflow-hidden">
        <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-6 left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div>
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-6 right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div>
        <div className="grid md:grid-cols-2">
          <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
            <h2 className="text-lg md:text-3xl text-blue-500 font-bold">
              Contact Us
            </h2>
            <img
              src="https://readymadeui.com/contact.webp"
              className="mt-4 flex-shrink-0 w-full"
              alt="Contact Us"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-8 z-50 py-5 px-8">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                name="Name"
                type="text"
                id="Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                required
                value={contact.Name}
                onChange={handleInput}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                name="Email"
                type="email"
                id="email"
                value={contact.Email}
                onChange={handleInput}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="flex justify-between items-center ">
              <select
                name="Country"
                id="Country"
                className="rounded-l-xl py-2 pl-1 flex w-[79px] justify-between"
                onChange={handleInput}
                required
              >
                <option value="U.S">+1</option>
                <option value="IND" className="flex items-center rounded-xl">
                  +91
                </option>
                <option
                  value="AUS"
                  className="flex items-center p-4 rounded-xl"
                >
                  +61
                </option>

                <option value="UK" className="flex items-center p-4 rounded-xl">
                  +44
                </option>
              </select>
              <label
                htmlFor="Country"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Phone number:
              </label>
              <div className="relative w-full">
                <input
                  name="Number"
                  type="number"
                  id="phone-input"
                  value={contact.Number}
                  onChange={handleInput}
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="Message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                value={contact.Message}
                onChange={handleInput}
              ></textarea>
            </div>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border-1 border-blue-500 bg-blue-100 px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
