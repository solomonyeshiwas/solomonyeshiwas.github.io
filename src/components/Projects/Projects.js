import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pms from "../../Assets/Projects/pms.png";
import ytclone from "../../Assets/Projects/ytclone.png";
import gebeya from "../../Assets/Projects/Gebeya.jpg";
import jobs4ethio from "../../Assets/Projects/jobs4ethio.png";
import lpms from "../../Assets/Projects/lpms.jpg";
import avital from "../../Assets/Projects/avital.PNG";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
        <Col md={4} className="project-card">
        <ProjectCard
          imgPath={pms}
          isBlog={false}
          title="PMS"
          description="Project Management System"
          demoLink="https://pms.hagbes.com"
        />
      </Col>

 
      <Col md={4} className="project-card">
      <ProjectCard
        imgPath={lpms}
        isBlog={false}
        title="LPMS"
        description="Local Procurement Management System"
        demoLink="https://lpms.hagbes.com"
      />
    </Col>


    <Col md={4} className="project-card">
    <ProjectCard
      imgPath={avital}
      isBlog={false}
      title="Avital Medical Center"
      description="A website that Avital Medical Center"
      demoLink="https://gebeyacommerce.vercel.app/"
    />
  </Col>



           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gebeya}
              isBlog={false}
              title="Gebeya e-Commerce"
              description="a MERN stack e-commerce platform"
              demoLink="https://gebeyacommerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytclone}
              isBlog={false}
              title="YouTube Clone"
              description="Youtube Cloning Web Application"
              demoLink="https://spontaneous-concha-f716a7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobs4ethio}
              isBlog={false}
              title="A Job Portal Website "
              description="A WordPress job finding website "
              demoLink="https://afalagijobs.com/"              
            />
          </Col>

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
