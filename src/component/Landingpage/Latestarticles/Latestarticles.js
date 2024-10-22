import './latestarticles.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { FaChevronLeft } from "react-icons/fa";


const Latestarticles = () => {
  const [dataHero, setDataHero] = useState([]);

 
    useEffect(() => {
      axios.get('/data.json')
        .then(response => {
          const blog = response.data.blog;
          setDataHero(blog);
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
          <h2>أحدث المقالات</h2>
          <span className="line"></span>
        </div>
        {dataHero.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
              <a href={item.view} target="_blank" rel="noopener noreferrer">
                <div></div>
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body latestworks-body">
                  <h5 className="card-title latestworks-h5">{item.title}</h5>
                  <p className="card-text latestworks-p">{item.description}</p>
                </div>
                </a>
                <div className="moreread">
                    <a href={item.view} target="_blank" rel="noopener noreferrer">
                        إقرأ المزيد
                         <FaChevronLeft className="pe-2"/>
                    </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default Latestarticles
