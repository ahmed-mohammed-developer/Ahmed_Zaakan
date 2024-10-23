import React, {useState , useEffect} from 'react'
import './technicalarticles.css'
import axios from 'axios';
import Fade from 'react-reveal/Fade';




const Technicalarticles = () => {
    const [dataHero, setDataHero] = useState([]);

 
    useEffect(() => {
      axios.get('/data.json')
        .then(response => {
          const technicalarticles = response.data.technicalarticles;
          setDataHero(technicalarticles);
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    }, []);
    return (
         <div className="technicalarticles">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>المقالات التقنية</h2>
                <span className="line"></span>
              </div>
            </div>
            <Fade top>
            <div className='row'>
            {dataHero.map((item, index) => (
                <div className='col-md-6' key={index}>
                <div className="card card-sleek">
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.view} className="btn btn-sleek">إقرأ أكثر</a>
            </div>
            </div>
                </div>
                    ))}
            </div>
            </Fade>
          </div>
        </div>
      );
}

export default Technicalarticles