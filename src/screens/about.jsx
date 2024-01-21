import Footer from "../Components/Footer";
import AboutCard from "../Components/aboutcard";
import Contact from "../Components/contact";
import Navigation from "../Components/nav";
import ServiceTitleCard from "../Components/servicetitlecard";

const About = () => {
  return (
    <div>
      <Navigation />
      <ServiceTitleCard title={"BRINGING ASPIRATIONS"} title2={"TO LIFE"} />
      <AboutCard />

      <Contact />
      <Footer />
    </div>
  );
};

export default About;
