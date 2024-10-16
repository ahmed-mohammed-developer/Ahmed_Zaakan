import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Latestworks from './component/Latestworks/Latestworks'
import Latestarticles from './component/Latestarticles/Latestarticles'
import Mybooks from './component/Mybooks/Mybooks'
import Services from './component/Services/Services'
import Contactme from './component/Contactme/Contactme'
import Footer from './component/Footer/Footer'
import { FaWhatsapp } from 'react-icons/fa';


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Latestworks />
    <Latestarticles />
    <Mybooks />
    <Services />
    <Contactme />
    <Footer />
    <a href="https://wa.me/966506353350" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} />
      </a>
    </>
  )
}

export default App