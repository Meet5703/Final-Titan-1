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

function DataAnalistic() {
  const curriculumSections = [
    {
      title: "Introduction",
      items: [
        "Course Introduction",
        "Introduction to Data Analytics",
        "Data Sources"
      ]
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
      items: ["Project lifecycle", "Project Methodologies", "Agile Frameworks"]
    }
  ];
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <Democard
        title={"DATA ANALYSTICS"}
        para={
          "Master the art of Data Analytics with our comprehensive course. From data exploration to advanced statistical modelling, delve into the world of insights. Gain practical skills and unlock the power of data-driven decision-making."
        }
      />
      <Stats />
      <Jobcard />
      <Keyheighlights />
      <Carousel />
      <Coursehlts />
      <Curriculum sections={curriculumSections} />
      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default DataAnalistic;
