import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1_informatics from "../assets/img/projects/its-informatika-building.jpg";
import projImg1_computerScience from "../assets/img/projects/computer-science-end.png";
import projImg3_storeProfit from "../assets/img/projects/store-profit-visualization.png";

export const Projects = () => {

  const projects = [
    {
      title: "My Journey as a Computer Science Student to Become Data Scientist",
      description: "- Blog -",
      imgUrl: projImg1_informatics,
      repoUrl: "https://medium.com/@davianoh/my-journey-as-a-computer-science-student-371447bd7820", 
    },
    {
      title: "Learning Paths on Computer Science Major",
      description: "- Blog -",
      imgUrl: projImg1_computerScience,
      repoUrl: "https://medium.com/@davianoh/learning-paths-on-computer-science-major-701fdfb15ef1", 
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg3,
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg1,
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg2,
    },
  ];

  const projects2 = [
    {
      title: "My Journey as a Computer Science Student to Become Data Scientist",
      description: "- Blog -",
      imgUrl: projImg1_informatics,
      repoUrl: "https://medium.com/@davianoh/my-journey-as-a-computer-science-student-371447bd7820", 
    },
    {
      title: "Learning Paths on Computer Science Major",
      description: "- Blog -",
      imgUrl: projImg1_computerScience,
      repoUrl: "https://medium.com/@davianoh/learning-paths-on-computer-science-major-701fdfb15ef1", 
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg3,
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg1,
    }, 
  ];

  const projects3 = [
    {
      title: "Store's Profitability Overview Data Visualization",
      description: "- Tableau -",
      imgUrl: projImg3_storeProfit,
      repoUrl: "https://public.tableau.com/app/profile/davian.benito/viz/Overview-SuperStore/ExecutiveOverview", 
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg2,
    },
    {
      title: "Data Project",
      description: "Goals and descriptions",
      imgUrl: projImg3,
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
