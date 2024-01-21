/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "../Components/nav";
import Contact from "../Components/contact";
import Footer from "../Components/Footer";
import Contactmap from "../Components/contactmap";
import Contactbranches from "../Components/contactbranches";

function ContactUs() {
  return (
    <div>
      <Navigation />
      <Contact />
      <Contactmap />
      <Contactbranches />
      <Footer />
    </div>
  );
}

export default ContactUs;
