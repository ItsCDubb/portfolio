import {
  AiOutlineBuild,
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineUser,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [active, setActive] = useState("#header");
  return (
    <nav>
      <a
        className={active === "#header" ? "active" : null}
        onClick={() => setActive("#header")}
        href="#header"
      >
        <AiOutlineHome />
      </a>
      <a
        className={active === "#about" ? "active" : null}
        onClick={() => setActive("#about")}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        className={active === "#technologies" ? "active" : null}
        onClick={() => setActive("#technologies")}
        href="#technologies"
      >
        <AiOutlineBuild />
      </a>
      <a
        className={active === "#services" ? "active" : null}
        onClick={() => setActive("#services")}
        href="#services"
      >
        <BiWrench />
      </a>
      <a
        className={active === "#portfolio" ? "active" : null}
        onClick={() => setActive("#portfolio")}
        href="#portfolio"
      >
        <AiOutlinePicture />
      </a>
      <a
        className={active === "#contact" ? "active" : null}
        onClick={() => setActive("#contact")}
        href="#contact"
      >
        <BsChatDots />
      </a>
    </nav>
  );
};

export default Navigation;
