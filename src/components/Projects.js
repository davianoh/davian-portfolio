import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1_informatics from "../assets/img/projects/its-informatika-building.jpg";
import projImg1_computerScience from "../assets/img/projects/computer-science-end.png";
import projImg1_ragKms from "../assets/img/projects/RAGonKMS.png";
import projImg1_ragAdvanced from "../assets/img/projects/Advanced-RAG.png";

import projImg2_buzzerDetection from "../assets/img/projects/buzzer-detection.png";

import projImg2_ocrPlate from "../assets/img/projects/OCR-plate.png";
import projImg3_storeProfit from "../assets/img/projects/store-profit-visualization.png";
import projImg3_crimeRate from "../assets/img/projects/LA-crimeRate.png";


export const Projects = () => {

  const projects = [
    {
      title: "My Journey as a Computer Science Student to Become Data Scientist",
      category: "Blog",
      site: "Medium", 
      imgUrl: projImg1_informatics,
      repoUrl: "https://medium.com/@davianoh/my-journey-as-a-computer-science-student-371447bd7820", 
    },
    {
      title: "Learning Paths on Computer Science Major",
      category: "Blog",
      site: "Medium", 
      imgUrl: projImg1_computerScience,
      repoUrl: "https://medium.com/@davianoh/learning-paths-on-computer-science-major-701fdfb15ef1", 
    },
    {
      title: "Retrieval-Augmented Generation in Developing Knowledge Management Systems",
      category: "Blog",
      site: "Medium", 
      imgUrl: projImg1_ragKms,
      repoUrl: "https://medium.com/@davianoh/retrieval-augmented-generation-in-developing-knowledge-management-systems-6be7a4b14762", 
    },
    {
      title: "Exploring Advanced RAG Approaches for Better Knowledge Management Systems",
      category: "Blog",
      site: "Medium", 
      imgUrl: projImg1_ragAdvanced,
      repoUrl: "https://medium.com/@davianoh/exploring-advanced-rag-approaches-for-better-knowledge-management-systems-96bd1fe27474", 
    },
  ];

  const projects2 = [
    {
      title: "Detailed Analysis of Buzzer Influence on Public Opinion",
      category: "Notebook & Analysis",
      site: "Github repo", 
      imgUrl: projImg2_buzzerDetection,
      repoUrl: "https://github.com/davianoh/Detailed-Analysis-of-Buzzer-Influence-on-Public-Opinion", 
    },
    {
      title: "License Plate Recognition Using OCR",
      category: "Notebook",
      site: "Github repo", 
      imgUrl: projImg2_ocrPlate,
      repoUrl: "https://github.com/davianoh/License-Plate-Recognition-OCR", 
    },
  ];

  const projects3 = [
    {
      title: "Store's Profitability Overview Data Visualization",
      category: "Visualization",
      site: "Tableau", 
      imgUrl: projImg3_storeProfit,
      repoUrl: "https://public.tableau.com/app/profile/davian.benito/viz/Overview-SuperStore/ExecutiveOverview", 
    },
    {
      title: "Los Angeles Crime Data - Overview",
      category: "Visualization",
      site: "Tableau", 
      imgUrl: projImg3_crimeRate,
      repoUrl: "https://public.tableau.com/views/LosAngelesCrimeData-Overview2020-Present/Overview?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Gained tons of experience from lots of data projects.<br></br>Below are all of my works, feel free to check them out!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>Blogs & Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>Colab Notebooks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>Deployed Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project2, index2) => {
                            return (
                              <ProjectCard
                                key={index2}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project3, index3) => {
                            return (
                              <ProjectCard
                                key={index3}
                                {...project3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
