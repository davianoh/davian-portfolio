import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

import skill1 from "../assets/img/skills/pytorch-ar21-white.svg";
import skill2 from "../assets/img/skills/tensorflow-ar21-fix.svg";
import skill3 from "../assets/img/skills/google_bigquery-ar21-fix.svg";
import skill4 from "../assets/img/skills/tableau.svg";
import skill5 from "../assets/img/skills/opencv-ar21-white.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Possessed many data skills thought my career<br></br>Still keep improving and learning every steps of the way</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
