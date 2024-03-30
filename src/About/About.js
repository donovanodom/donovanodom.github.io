import { Container, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

const About = () => {

  const skills = [
    "JavaScript",
    "TypeScript",
    "Ruby on Rails",
    "ReactJS",
    "Redux",
    "GraphQL",
    "HTML",
    "CSS",
    "Agile",
    "DataDog", 
    "LaunchDarkly", 
    "Git", 
    "AWS",
    "API's", 
    "Web Sockets",
    "Audio Engineering",
    "Graphic Design",
    "Photoshop",
  ];

  return (
    <div className="about">
      <Container fluid>
        <Row>
          <Col lg={6}>
            Donovan here, I’m a
            software engineer with specialtions in Frontend Web Applications. 
            My skilles includes React (TypeScript/JavaScript),
            Redux, and GraphQL. I enjoy organizing ways to make web development
            efficient, coordinating innovative & communicative ways to meet
            client arrangements & most of all, building projects and
            implementing new technologies to challenge myself as a developer.
            <br />
            <br />
            I work as a full-time software engineer for Bayer within our 
            Crop Science Digital Farming Solutions division. As part of a fullstack team, 
            I share ownership over our web analytics reporting software.
            <br />
            <br />
            To contact me, please email dodomdev@gmail.com.
          </Col>
          <Col lg={6} className="about-right">
            {skills.map((skill, index) => (
              <div>
                <Zoom clear delay={index * 500}>
                  <div className="skill-list">{skill}</div>
                </Zoom>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
