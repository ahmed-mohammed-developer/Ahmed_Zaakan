import React from 'react';
import './technologiesused.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';








const Technologiesused = () => {
  const DeatelisSection = [
    {
      id: 1,
      title: "HTML",
      icon: <FontAwesomeIcon className="feature-icon" icon={faHtml5} />
    },
    {
      id: 2,
      title: "CSS",
      icon: <FontAwesomeIcon className="feature-icon" icon={faCss3Alt} />
    },
    {
        id: 3,
        title: "Bootstrap",
        icon: <FontAwesomeIcon className="feature-icon" icon={faBootstrap} />
      },
      {
        id: 4,
        title: "SASS",
        icon: <FontAwesomeIcon className="feature-icon" icon={faSass} />
      },
      {
        id: 5,
        title: "JavaScript",
        icon: <FontAwesomeIcon className="feature-icon" icon={faJs} />
      },
      {
        id: 6,
        title: "React",
        icon: <FontAwesomeIcon className="feature-icon" icon={faReact} />
      },
      {
        id: 7,
        title: "Material-Ui",
        icon: <FontAwesomeIcon className="feature-icon" icon={faM} />
      },

  ];

  return (
   <Fade top>
     <div className="technologiesused" id='technologiesusedid'>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>التقنيات المستخدمة</h2>
            <span className="line"></span>
          </div>
        </div>
        <div className="row">
          {DeatelisSection.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="feature-box">
                {item.icon}
                <h3 className="feature-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </Fade>
  );
};

export default Technologiesused;
