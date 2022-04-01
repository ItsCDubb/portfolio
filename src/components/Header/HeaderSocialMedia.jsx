import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocialMedia = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/itscdubb/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/CDubb2019/" target="_blank" rel="noreferrer">
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
  );
};

export default HeaderSocialMedia;
