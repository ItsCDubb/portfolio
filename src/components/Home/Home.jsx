import Testimonals from "../Testimonials";
import Portfolio from "../Portfolio";
import Tech from "../Technologies";
import Services from "../Services";
import Contact from "../Contact";
import Nav from "../Navigation";
import Footer from "../Footer";
import About from "../About";
import Header from "../Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Testimonals />
      <Tech />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
