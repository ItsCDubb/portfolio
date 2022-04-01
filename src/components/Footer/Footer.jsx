import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        Chris Warren
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">My Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/itscdubb/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/CDubb2019/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a href="https://github.com/ItsCDubb" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/itscwarren/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Chris Warren | All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
