import { Container, Col, Row } from "react-bootstrap";
import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col lg={5}>
            <div className="reach">
              <Fade delay={600} bottom>
                <h2>Want to connect?</h2>
              </Fade>
            </div>
          </Col>
          <Col lg={7}>
            <div className="inquiries">
              <Fade delay={1200} bottom>
                <div>
                  Any inquiries or opportunities can be addressed to
                  dodomdev@gmail.com
                </div>
                <div className="footer-contacts">
                  <a href="https://github.com/donovanodom">
                    <BsGithub />
                  </a>
                  <a href="https://donovanodom.medium.com/">
                    <BsMedium />
                  </a>
                  <a href="https://www.linkedin.com/in/donovanodom/">
                    <BsLinkedin />
                  </a>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
