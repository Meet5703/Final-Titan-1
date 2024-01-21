import Curriculum from "../../../Components/Curriculum";
// import Features from "../../../Components/Features";
import Footer from "../../../Components/Footer";
import Coursehlts from "../../../Components/coursehlts";
import Carousel from "../../../Components/crousel";
import Democard from "../../../Components/democard";
import Jobcard from "../../../Components/jobcard";
import Keyheighlights from "../../../Components/keyheighlights";
import Navigation from "../../../Components/nav";
import Stats from "../../../Components/stats";

function MernStck() {
  const curriculumSections = [
    {
      title: "HTML",
      items: [
        "Writing a Hello World program in HTML",
        "Useful VS code extensions",
        "HTML comments",
        "Element and Tag in HTML",
        "Core HTML",
        "Media and Forms",
        "Modern HTML"
      ]
    },
    {
      title: "CSS",
      items: [
        "Starting with CSS",
        "Deep dive on CSS",
        "Positions in CSS",
        "Flexbox in CSS",
        "Grid in CSS",
        "Media Query",
        "CSS selector",
        "Advanced CSS"
      ]
    },
    {
      title: "Git and Github",
      items: [
        "Version Control System",
        "General Command on Git",
        "Git deep dive",
        ".gitignore and importance",
        "Github"
      ]
    },
    {
      title: "Javascript",
      items: [
        "Introduction to JavaScript",
        "Operators in JavaScript Part 1",
        "Operators in JavaScript Part 2",
        "Type Conversion",
        "Condition and Loops",
        "Function in JavaScript",
        "JavaScript Fundamentals",
        "Array and Object",
        "JavaScript DOM"
      ]
    },
    {
      title: "React",
      items: [
        "Walkthrough With React",
        "Deep Dive into React Components",
        "Understanding States and Hooks",
        "More about react",
        "Component Styling",
        "React Router",
        "Form Handling",
        "API Calls",
        "Redux",
        "React Build & Deploy"
      ]
    },
    {
      title: "NodeJS",
      items: ["Node JS - I", "Node JS - II", "Express", "Express"]
    },
    {
      title: "Database",
      items: [
        "Fundamental Of Database",
        "MongoDB, Mongoose - I",
        "MongoDB, Mongoose - II",
        "CRUD App",
        "Authentication and Authorization, Error handling - I",
        "Authentication and Authorization, Error handling - II",
        "Working with files"
      ]
    }
    // Add more sections as needed
  ];
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <Democard
        title={"FULL STACK WEB DEVELOPEMENT"}
        para={
          "Master the MERN (MongoDB, Express.js, React, Node.js) stack with our comprehensive Full Stack Web Development course. Acquire hands-on experience in building dynamic, scalable web applications. Elevate your skills in both front-end and back-end development for a competitive edge in the industry"
        }
      />
      <Stats />
      <Jobcard />
      <Keyheighlights />
      <Carousel />
      <Coursehlts
        title={"DATA ANALYSTICS"}
        p1={"THIS IS PARA 1"}
        p2={"THIS IS P2"}
        p3={"THIS IS P3"}
      />
      <Curriculum sections={curriculumSections} />
      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default MernStck;
