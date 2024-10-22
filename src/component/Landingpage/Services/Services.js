import React from 'react'
import "./Services.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';






const Services = () => {
  return (
    <Fade top>
        <div className="services" id="servicesid">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 style={{color: "#fff"}}>الخدمات</h2>
            <span className="line" style={{background: "#fff"}}></span>
          </div>
        </div>
        <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2">
                <div className="serv-section-2-icon"><FontAwesomeIcon className='iconS' icon={faObjectGroup} /></div>
                <div className="serv-section-desc">
                  <h4> مواقع الويب</h4>
                  <h5>برمجة وتصميم مواقع الويب</h5>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2 serv-section-2-act">
                <div className="serv-section-2-icon serv-section-2-icon-act"> <FontAwesomeIcon className='iconS' icon={faGear} /> </div>
                <div className="serv-section-desc">
                  <h4>الإدارة</h4>
                  <h5>إدارة مواقع الويب</h5>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2">
                <div className="serv-section-2-icon"> <FontAwesomeIcon className='iconS' icon={faCode} /></div>
                <div className="serv-section-desc">
                  <h4>إصلاح الأكواد</h4>
                  <h5>إصلاح أكواد الواجهة الأمامية</h5>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </Fade>
    
  );
}
export default Services