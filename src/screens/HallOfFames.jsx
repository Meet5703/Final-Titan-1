import Footer from "../Components/Footer";
import HOFCard from "../Components/HOFCard";
import HOFGrid from "../Components/HOFGRD";
import PersonCard from "../Components/HOFPersons";
import Navigation from "../Components/nav";

const HallOfFames = () => {
  return (
    <div>
      <Navigation />
      <HOFCard />
      <HOFGrid />
      <PersonCard />
      <Footer />
    </div>
  );
};
export default HallOfFames;
