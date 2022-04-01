import { FaCode, FaGamepad, FaMobileAlt } from "react-icons/fa";
import { GoLightBulb, GoServer } from "react-icons/go";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>Some of my</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <FaMobileAlt className="service__icon" />
            <h3>Mobile App Design & Development</h3>
          </div>
          <p>
            This is my specialty I will design, develop, & create, your
            revolutionary mobile app(s) which are built with the latest
            technologies to include React Native.
          </p>
        </article>
        <article className="service">
          <div className="service__head">
            <FaCode className="service__icon" />
            <h3>Web Design & Development</h3>
          </div>
          <p>
            I will create & design a professional, responsive website using the
            latest technologies & is guaranteed to be SEO optimized.
          </p>
        </article>
        <article className="service">
          <div className="service__head">
            <GoServer className="service__icon" />
            <h3>Hosting</h3>
          </div>
          <p>
            I will host your app or website using the latest technology
            available.
          </p>
        </article>
        <article className="service">
          <div className="service__head">
            <FaGamepad className="service__icon" />
            <h3>Game Design & Development</h3>
          </div>
          <p>
            I will create & design a professional, gaming environment using the
            latest technologies available.
          </p>
        </article>
        <article className="service">
          <div className="service__head">
            <GoLightBulb className="service__icon" />
            <h3>Brand Development</h3>
          </div>
          <p>
            I will help you create or develop your brand using the latest design
            techniques.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
