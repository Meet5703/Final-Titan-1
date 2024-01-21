/* eslint-disable no-unused-vars */
import React from "react";
import Democard from "../Components/democard";
import Stats from "../Components/stats";
import Navigation from "../Components/nav";
import Footer from "../Components/Footer";
import Jobcard from "../Components/jobcard";
import Keyheighlights from "../Components/keyheighlights";
import Carousel from "../Components/crousel";
import Coursehlts from "../Components/coursehlts";
import Webinar from "../Components/webinar";
import Curriculum from "../Components/Curriculum";
import Features from "../Components/Features";

function CourseDetails() {
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <Democard />
      <Stats />
      <Jobcard />
      <Keyheighlights />
      <Carousel />
      <Coursehlts />
      <Webinar />
      <Curriculum />
      <Features />
      <Footer />
    </div>
  );
}

export default CourseDetails;
