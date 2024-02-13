import { Link } from "react-scroll";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";
import Logo from "./svg/Logo";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((active) => !active);
  };

  const handlePass = () => {
    setActive(false);
  };
  return (
    <>
      <div onClick={toggle} className="nav-toggle">
        {active ? <BsX /> : <BsList />}
      </div>
      <div className={active ? "nav" : "nav-null"}>
        <Link duration={800} to="home">
          <div onClick={handlePass} className="nav-logo">
            <Fade delay={1200} duration={1200}>
              <Logo />
            </Fade>
          </div>
        </Link>
        <Fade delay={1400} left>
          <div id="nav-line"></div>
        </Fade>
        <Link duration={800} to="about">
          <div onClick={handlePass} className="nav-link">
            ABOUT
          </div>
        </Link>
        <Link duration={800} to="projects">
          <div onClick={handlePass} className="nav-link">
            PROJECTS
          </div>
        </Link>
        <Link duration={800} to="blog">
          <div onClick={handlePass} className="nav-link">
            BLOG
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
