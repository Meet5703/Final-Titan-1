"use client";

import { Card } from "flowbite-react";
import Navigation from "../Components/nav";
import Footer from "../Components/Footer";

function Blogs() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-center m-10 mt-24 gap-8">
        <Card
          className="max-w-sm bg-blue-100 shadow-2xl shadow-gray-500"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="max-w-sm bg-blue-100 shadow-2xl shadow-gray-500"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="max-w-sm bg-blue-100 shadow-2xl shadow-gray-500"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://www.flowbite-react.com/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
export default Blogs;
