import CTA from "./CTA";
import SocialMedia from "./HeaderSocialMedia";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div class="custom-shape-divider-bottom-1648675461">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Chris Warren</h1>
        <h5 className="text-light">and I'm a developer</h5>
        <CTA />
        <SocialMedia />
        <a className="scroll__down" href="#contact">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
