import { Container, Col, Row } from "react-bootstrap";
import {
  BsGithub,
  BsMedium,
  BsLinkedin,
  BsArrow90DegRight,
} from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Me from "../svg/Me";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div className="home-flex">
              <div className="home-name">
                <Fade delay={400} duration={1000}>
                  <img
                    id="home-title"
                    alt="donovan-odom"
                    src="https://i.imgur.com/zjw6YiW.png"
                  />
                </Fade>
                <Fade delay={600} left>
                  <div className="home-subtitle">
                    TS/JS, DESIGN-ADEPT, SOFTWARE ENGINEER
                  </div>
                </Fade>
              </div>
              <Fade delay={600} clear duration={2000}>
                <div id="me">
                  <Me />
                </div>
              </Fade>
            </div>
            <div className="socials">
              <Fade delay={800} top>
                <div id="vert-line"></div>
              </Fade>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li className="contact-list">
                  <a href="https://github.com/donovanodom">
                    <BsGithub />
                  </a>
                </li>
                <li className="contact-list">
                  <a href="https://donovanodom.medium.com/">
                    <BsMedium />
                  </a>
                </li>
                <li className="contact-list">
                  <a href="https://www.linkedin.com/in/donovanodom/">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="scroll-graphic">
              <div style={{ transform: "rotate(270deg)" }}>
                <div className="scroll-text">SCROLL</div>
                <div className="scroll-icon">
                  <BsArrow90DegRight />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
