import Footer from "../Components/Footer";
import Contact from "../Components/contact";
import Carousel from "../Components/crousel";
import Herocard01 from "../Components/herocard01";
import Navigation from "../Components/nav";
import Roadmap from "../Components/roadmap";
import ServiceCard from "../Components/services";
import Testimonial from "../Components/testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navigation />
      <Herocard01 />
      <ServiceCard />
      <Carousel />
      <Roadmap
        title={
          "Simplify placement journey: resume building, IT training, strategic guidance and Placement"
        }
        content2={"Here how we do it"}
        setsOfParas={[
          {
            leftParas: [
              {
                title: "Career Counselling",
                description:
                  "Guiding IT professionals toward success, Titans Technology offers personalized career counseling as part of our comprehensive IT training. Tailored advice and strategic insights empower individuals for thriving careers in technology."
              }
            ],
            rightParas: [
              {
                title: "IT Training",
                description:
                  "At Titans Technology, our IT training goes beyond theory, offering a hands-on experience with real-time projects. Our expert-led programs provide practical insights, ensuring participants gain valuable skills for success in the dynamic IT industry."
              }
            ]
          },
          {
            leftParas: [
              {
                title: "Resume Building",
                description:
                  "Titans Technology specializes in resume services that set you apart in the crowd and captivate recruiters. Our expert team tailors resumes to highlight your strengths, ensuring a compelling professional impression."
              }
            ],
            rightParas: [
              {
                title: "Interview Prepration",
                description:
                  "At Titans Technology, we offer interview preparation and mock call practice with expert guidance to enhance your skills. Elevate your confidence and readiness, ensuring success in securing your dream job.hii"
              }
            ]
          },
          {
            leftParas: [
              {
                title: "Placement Support",
                description:
                  "At Titans Technology, our comprehensive IT training comes with dedicated placement support. We guide you through job applications, interview scheduling, and salary negotiations, ensuring you're well-prepared for a successful career transition. We also guarantee successful employment placements within 90 days of the candidate registering with us."
              }
            ],
            rightParas: [
              {
                title: "",
                description: ""
              }
            ]
          }
        ]}
      />

      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
