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

function DataScience() {
  const curriculumSections = [
    {
      title: "Python",
      items: [
        "Python Introduction",
        "Functions",
        "Mathematical operation",
        "Data Manipulation",
        "DSA",
        "Visualisation",
        "Project"
      ]
    },
    {
      title: "Machine Learning Toolbox",
      items: ["Pandas & Numpy", "Visualization Libraries"]
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
      title: "Exploratory Data Analysis",
      items: ["Introduction", "Projects"]
    },
    {
      title: "Machine Learning",
      items: [
        "Feature Engineering",
        "ML - Supervised -1",
        "ML - Supervised -2",
        "ML - Supervised -3",
        "ML - Unsupervised",
        "ML -Time Series",
        "ML Projects"
      ]
    },
    {
      title: "Deep Learning, CV & NLP",
      items: [
        "Deep Learning ANN",
        "Deep Learning Fundamentals",
        "Deep Learning Frameworks",
        "CV Fundamentals",
        "Image Classification & Transfer Learning",
        "CV - Object Detection",
        "CV - Segmentation Tracking",
        "Deep Learning (NLP - 1)",
        "Deep Learning (NLP - 2)",
        "Deep Learning Projects With Deployment",
        "Deep Learning Projects"
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
    }

    // Add more sections as needed
  ];
  return (
    <div className="flex flex-col space-y-8">
      <Navigation />
      <Democard
        title={"DATA SCIENCE"}
        para={
          "Dive into the intricacies of Data Science through our comprehensive course, where you'll master key skills in Python programming, machine learning techniques, and advanced data visualization. Acquire practical experience, empowering you to extract actionable insights and drive informed decisions within the dynamic field of data science."
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

export default DataScience;
