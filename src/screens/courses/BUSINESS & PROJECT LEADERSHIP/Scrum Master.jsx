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

function Scrum() {
  const curriculumSections = [
    {
      title: "Introduction",
      items: ["Course Introduction", "Introduction to Data Analytics"]
    },
    {
      title: "My SQL",
      items: [
        "Introduction To My SQL",
        "Functions in SQL",
        "Joins",
        "Subqueries",
        "Window Functions",
        "Data Modelling & Normalization",
        "Project"
      ]
    },
    {
      title: "Power BI",
      items: [
        "Introduction to Power BI",
        "Functions in SQL",
        "Visualizations",
        "Data modeling",
        "DAX",
        "Connectivity",
        "Creating reports",
        "Power BI Architecture",
        "Projects"
      ]
    },
    {
      title: "Excel",
      items: [
        "Excel Introduction",
        "Worksheets and Workbook",
        "Functions",
        "Data Cleaning & Validation",
        "Visualization",
        "Macros and VBA",
        "Security Features",
        "Project"
      ]
    },
    {
      title: "Python",
      items: [
        "Python Introduction",
        "Functions",
        "Mathematical operation",
        "Data Manipulation",
        "Visualisation",
        "Project"
      ]
    },
    {
      title: "Statistics",
      items: ["Statistics for Data Analytics"]
    },
    {
      title: "Project Management",
      items: [
        "Project Management tools",
        "Role of BA",
        "Project Management Methodology",
        "Jira",
        "Agile Methodology",
        "Scrum",
        "BA Documentation"
      ]
    }
  ];
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <Democard
        title={"SCRUM MASTER"}
        para={
          "Become a proficient Scrum Master with our specialized course. Learn agile methodologies, sprint planning, and effective team collaboration. Acquire the skills to lead and optimize the Scrum framework for successful project delivery"
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

export default Scrum;
