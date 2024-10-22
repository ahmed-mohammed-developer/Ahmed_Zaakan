import './MyBooks.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { FaArrowDown } from "react-icons/fa";
import Fade from 'react-reveal/Fade';



const MyBooks = () => {
    const [dataHero, setDataHero] = useState([]);

 
    useEffect(() => {
      axios.get('/data.json')
        .then(response => {
          const mybooks = response.data.mybooks;
          setDataHero(mybooks);
        })
        .catch(error => {
          console.log('Error fetching data:', error);
        });
    }, []);




  return (
    <Fade top>
       <div className="setps" id="Mybooks">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2>المؤلفات</h2>
          <span className="line"></span>
        </div>
        {dataHero.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
             <div className="card cardlastprojict">
            <a href={item.down} target="_blank" rel='noreferrer'>
              <div></div>
              <img className="card-img-top" src={item.img} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title mybookstitl">{item.title}</h5>
              </div>
              </a>
              <div className="moreread">
                  <a href={item.down} target="_blank" rel='noreferrer'>
                       تحميل الكتاب
                       <FaArrowDown  className="pe-2 downbookicon"/>
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </Fade>
  )
}

export default MyBooks
