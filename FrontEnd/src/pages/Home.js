import '../App.css';
import Menunavbar from "../components/Menunavbar";
import Header from '../components/Header';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Testimonies from '../components/Testimonies';
import Footer from '../components/Footer';
import RealiseProject from '../components/RealiseProject';

const Home = () => {
  return(
     <div className="container d-flex flex-column">
        <Menunavbar />
        <Header />
        <Solutions />
        <RealiseProject />
        <Contact />
        <Testimonies />
        <Footer />
     </div>
  ) 
};

export default Home;