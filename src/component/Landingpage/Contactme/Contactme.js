import './contactme.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';






const Contactme = () => {
  return (
      <div className="Contactme" id="Contactme">
      <div className="container">
        <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
              <div className="card cardlastprojict">
              <div className="section-title titlecont">
            <h2>فلنصنع شياَ عظيماَ معاَ😊</h2>
          </div>
          <div className="user">
          <img src={`${process.env.PUBLIC_URL}/images/call.png`} alt="Call" />
          </div>
          <div className="iconcontact">
          <FontAwesomeIcon icon={faPhoneFlip} className='iconcon'/>
          <a href="tel:0506353350">0506353350</a>
          </div>
          <div className="iconcontact ">
          <FontAwesomeIcon icon={faEnvelopeOpen} className='iconcon'/>
          <a href="mailto:ahmed.mohammed.developer@gmail.com">ahmed.mohammed.developer@gmail.com</a>
          </div>
          <div className="iconcontact">
          <FontAwesomeIcon icon={faWhatsapp} className='iconcon'/>
          <a href="https://wa.me/966506353350">966506353350</a>
          </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Contactme
