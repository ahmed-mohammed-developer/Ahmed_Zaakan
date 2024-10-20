import React, { useEffect, useState } from 'react';
import './hero.css';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';





const Hero = () => {
  const [dataHero, setDataHero] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        const hero = response.data.hero;
        setDataHero(hero);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='hero'>
      <CssBaseline />
      <Container fixed className='flexspacebetween'>
          {dataHero.map((item, index) => (
            <div className="imghero" key={index}>
              <img src={item.img} alt={`Slide ${index}`} />
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Hero;
