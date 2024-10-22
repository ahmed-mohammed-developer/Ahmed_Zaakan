import './latestworks.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';




const Latestworks = () => {
    const [dataHero, setDataHero] = useState([]);

 
    useEffect(() => {
      axios.get('/data.json')
        .then(response => {
          const progict = response.data.progict;
          setDataHero(progict);
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    }, []);
  return (
    <div className="setps">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2>أحدث الأعمال</h2>
          <span className="line"></span>
        </div>
        {dataHero.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
              <a href={item.view} target="_blank" rel="noopener noreferrer">
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body latestworks-body">
                  <h5 className="card-title latestworks-h5">{item.title}</h5>
                  <p className="card-text latestworks-p">{item.description}</p>
                </div>
                </a>
              <ul>
                <li><a href={item.download} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href={item.view} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEye} /></a></li>
                <li><a href={item.qalip} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLocationArrow} /></a></li>
            </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default Latestworks
