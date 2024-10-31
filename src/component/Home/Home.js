import React, {useEffect} from 'react'
import Hero from '../Landingpage/Hero/Hero.js'
import Seteps from '../Landingpage/Seteps/Seteps';
import Service from '../Landingpage/Services/Services.js';
import Technicalarticles from '../Landingpage/Technicalarticles/Technicalarticles.js';
import Latestworks from '../Landingpage/Latestworks/Latestworks.js';
import Latestarticles from '../Landingpage/Latestarticles/Latestarticles.js';
import Technologiesused from '../Landingpage/Technologiesused/Technologiesused.js';
import Features from '../Landingpage/Features/Features.js';
import Contactme from '../Landingpage/Contactme/Contactme.js';
import MyBooks from '../Landingpage/MyBooks/MyBooks.js';
import Home2 from '../Landingpage/Home2/Home2.js';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // تمرير الصفحة لأعلى عند تحميل المكون
  }, []);
  return (
    <>
    <Home2 />
      <Service />
      <Seteps />
      <Technologiesused />
      <Features />
      <Contactme />
      <Technicalarticles />
      <Latestworks />
      <Latestarticles />
      <MyBooks />
    </>
  )
}

export default Home