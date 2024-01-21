/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from "../../../Components/Footer";
import Contact from "../../../Components/contact";
import Navigation from "../../../Components/nav";
import Roadmap from "../../../Components/roadmap";
import ServiceTitleCard from "../../../Components/servicetitlecard";
import ValueCard from "../../../Components/value";

function CanadaStaffing() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navigation />
      <ServiceTitleCard
        title={"Your trusted partner in job hunting process:"}
        title2={"Titans Tech IT Solutions"}
      />
      <section className="bg-blue-100 w-[100%]  p-8 md:p-16">
        <h1 className="md:text-2xl lg: font-bold text-center md:mx-32 mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          ANSWERS TO ALL YOUR JOB HUNTING QUERIES: CANADA IT STAFFING SERVICES
          FROM TITANS TECHNOLOGY
        </h1>
        <p className="text-justify text-sm md:text-base lg:text-lg xl:text-xl">
          At Titans Technology, we get how important it is to find a recruiter
          that matches your plans and skills. We've been helping with Canada IT
          staffing for a long time, so we know what you're looking for. We
          customize our service to be unique for you, and for newcomers, we have
          trainers to help you learn and find jobs.
        </p>
      </section>
      <div className="w-[100%] mt-8 px-8">
        <h1 className="text-center pb-6 text-[16px] text-xl md:text-3xl border-b border-blue-950 font-bold">
          NUTURE YOUR TECH TALENT WITH OUR BRILIANT IT STAFFING SERVICES IN
          <span className="text-blue-600 ml-2">CANADA</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10">
          <div className="text-justify  my-5 md:mx-5">
            <div className="space-y-4 px-4 pt-6 text-[13px] md:text-[16px]">
              <p>
                Titans Technology is all about simplifying your job search. We
                understand the challenges of finding the right job, especially
                in the IT field. With our Canada IT staffing services, we aim to
                tailor our approach to your specific needs, providing
                personalized assistance without the hefty consultancy fees.
                Whether you're an experienced professional or just starting,
                we're here to make your job search easy and affordable.
              </p>
              <p>
                For those new to the industry, we offer more than just job
                placements. Our dedicated trainers are here to help you develop
                the skills you need to succeed. At Titans Technology, it's not
                just about finding a job; it's about supporting your growth and
                helping you achieve your career goals. Let's embark on this
                journey together, making your career path smoother and more
                successful.
              </p>
              <p>
                Continuing this commitment, we ensure that our services go
                beyond placements. Our ongoing support includes mentorship,
                career counseling, and skill enhancement opportunities. Titans
                Technology is not just a service; it's a career partner invested
                in your success. Join us, and let's build a thriving future for
                your career.
              </p>
            </div>
            <button className="relative mt-6 flex h-[50px] w-40 items-center justify-center overflow-hidden border-1 border-blue-600 bg-blue-100 text-blue-600 hover:text-blue-100 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">EXPLORE MORE</span>
            </button>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/vector-collection-business-people_53876-17564.jpg?w=740&t=st=1705763185~exp=1705763785~hmac=69bde4bfe41efc531ef924bcb327b077831e470523ab208b9de7a57d7d57e980"
              alt=""
            />
          </div>
        </div>
      </div>
      <ValueCard
        title={"WHY CHOOSE TITAN TECH AS YOUR"}
        title2={"JOB HUNTING PARTNER?"}
        title3={
          "Define your success in the most innovative jobs with the most extensive and thorough Staffing solutions of Titans Tech-IT."
        }
        items={[
          {
            title: "Finding perfect fit",
            description:
              "After carefully evaluating your technical skills, we will start searching for an ideal recruiter for you."
          },
          {
            title: "Trusted Partners",
            description:
              "Titan Tech-IT has placed candidates in the IT field for the past decade; as a result, we have become a trusted partner in the staffing journey."
          },
          {
            title: "Always being there for you",
            description:
              "Beyond placements, we provide interview support, training, and job descriptions to strengthen your profile."
          }
        ]}
        items2={[
          {
            title: "Quick Adapting",
            description:
              "We will be constantly monitoring the market situation to quickly adapt to any changes if they occur. So, your profile will be top in the market search."
          },
          {
            title: "Heeding every detail",
            description:
              "We will pay attention to every opportunity you get so you don't miss any opportunity, and we can get your dream as soon as possible."
          },
          {
            title: "Proven Track Record",
            description:
              "We provide comprehensive onboarding support, helping new hires get up-to-speed quickly and effectively in their new roles. We relieve our clients of taking care of the formalities in the initial few days of new candidate placements."
          }
        ]}
      />
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

      <Contact />
      <Footer />
    </div>
  );
}

export default CanadaStaffing;
