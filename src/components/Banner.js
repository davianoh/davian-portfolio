import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import davImg from "../assets/img/davian-portfolio-profile.png";
import { FileEarmarkArrowDown } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Scientist", "Data Analyst", "AI Enthusiast" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">HELLO !!</span>
                <h1>{`I'm Davian Benito, `}<br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Scientist", "Data Analyst", "AI Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Data Enthusiast, passionate in working with data and gaining significant insight along the way. Really invested in the development of AI and its implementation across many fields of humanity</p>
                  <button onClick={() => window.open(process.env.PUBLIC_URL + '/DavianBenito-CV.pdf', '_blank')}>
                    Download CV <FileEarmarkArrowDown size={25} />
                  </button>
                  

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn center-img" : "center-img"}>
                  <img src={davImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
