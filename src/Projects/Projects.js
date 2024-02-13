import { Container, Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projects">
      <Container fluid>
        <Row>
          <Col lg={6} className="project">
            <Fade delay={400} clear duration={1400}>
              <div className="project-box" id="protoswim">
                <div className="pb-div">
                  <h1>protoswim</h1>
                  <hr />
                  <h2>
                    React / Rails multi group-chatting platform for use on
                    collaborative projects
                  </h2>
                  <div className="project-actions">
                    <div className="video-demo">
                      <a
                        style={{ textDecoration: "none", color: "inherit" }}
                        href="https://youtu.be/Nt4z3Egcjns"
                      >
                        VIDEO DEMO
                      </a>
                    </div>
                    <div className="github-repo">
                      <a
                        style={{ textDecoration: "none", color: "inherit" }}
                        href="https://github.com/donovanodom/protoswim"
                      >
                        GITHUB REPO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
          <Col lg={6} className="project">
            <Fade delay={400} clear duration={1400}>
              <div className="project-box" id="polymr">
                <div className="pb-div">
                  <h1>polymr</h1>
                  <hr />
                  <h2>
                    React / Rails collaboration center & task tracker for use on
                    managing projects
                  </h2>
                  <div className="project-actions">
                    <div className="video-demo">
                      <a
                        style={{ textDecoration: "none", color: "inherit" }}
                        href="https://youtu.be/qzIr3qYsC7s"
                      >
                        VIDEO DEMO
                      </a>
                    </div>
                    <div className="github-repo">
                      <a
                        style={{ textDecoration: "none", color: "inherit" }}
                        href="https://github.com/donovanodom/polymr-beta"
                      >
                        GITHUB REPO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
