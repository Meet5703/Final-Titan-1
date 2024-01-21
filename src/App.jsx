/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens";
import About from "./screens/about";
// import Blogs from "./screens/Blogs";
// import Faq from "./screens/FAQ";
// import HallOfFames from "./screens/HallOfFames";
import ContactUs from "./screens/Contact";
import DataAnalistic from "./screens/courses/DATA INTELLIGENCE SPECIALIZATION/Data Analytics";
import DataScience from "./screens/courses/DATA INTELLIGENCE SPECIALIZATION/Data Science";
import MernStck from "./screens/courses/Web Development/MERN Stack Development";
import BuisnessAna from "./screens/courses/BUSINESS & PROJECT LEADERSHIP/Business Analytics";
import ProjectM from "./screens/courses/BUSINESS & PROJECT LEADERSHIP/Project Manager";
import Scrum from "./screens/courses/BUSINESS & PROJECT LEADERSHIP/Scrum Master";
// import CloudService from "./screens/Services/CLOUD SERVICES/ON-DEMAND CLOUD SERVICES";
// import DevOps from "./screens/Services/CLOUD SERVICES/DEVOPS SERVICES";
// import Platform from "./screens/Services/SOFTWARE DEVELOPMENT SERVICES/CUSTOMIZED PLATFORMS";
// import Mobile from "./screens/Services/SOFTWARE DEVELOPMENT SERVICES/MOBILE APPLICATIONS DEVELOPMENT";
// import WebDev from "./screens/Services/SOFTWARE DEVELOPMENT SERVICES/WEBSITE DEVELOPMENT";
// import Talent from "./screens/Services/STAFFING & RECRUITMENT SERVICES/TALENT ACQUISITION";
import CanadaStaffing from "./screens/Services/STAFFING & RECRUITMENT SERVICES/CANADA IT STAFFING";
import UsStaffing from "./screens/Services/STAFFING & RECRUITMENT SERVICES/USA IT STAFFING";
import Admin from "./screens/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Blogs" element={<Blogs />} />
        <Route path="/FAQS" element={<Faq />} />
        <Route path="/HALL OF fAME" element={<HallOfFames />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course/Data Analytics" element={<DataAnalistic />} />
        <Route path="/course/Data Science" element={<DataScience />} />

        <Route path="/course/MERN Stack Development" element={<MernStck />} />
        <Route path="/course/Business Analytics" element={<BuisnessAna />} />
        <Route path="/course/Project Manager" element={<ProjectM />} />
        <Route path="/course/Scrum Master" element={<Scrum />} />
        <Route path="/services/USA IT STAFFING" element={<UsStaffing />} />
        <Route
          path="/services/CANADA IT STAFFING"
          element={<CanadaStaffing />}
        />
        {/* <Route path="/services/TALENT ACQUISITION" element={<Talent />} /> */}
        {/* <Route path="/services/WEBSITE DEVELOPMENT" element={<WebDev />} /> */}
        {/* <Route */}
        {/* // path="/services/MOBILE APPLICATIONS DEVELOPMENT" */}
        {/* // element={<Mobile />} */}
        {/* /> */}
        {/* <Route path="/services/CUSTOMIZED PLATFORMS" element={<Platform />} /> */}
        {/* <Route path="/services/DEVOPS SERVICES" element={<DevOps />} /> */}
        {/* <Route
          path="/services/ON-DEMAND CLOUD SERVICES"
          element={<CloudService />}
        /> */}
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
