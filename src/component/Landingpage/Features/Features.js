import React from 'react'
import './features .css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';






const Features = () => {


    const DeatelisSection = [
        {
          id: 1,
          title: "التصميم المتجاوب",
          des: "تجربة مثالية على جميع الأجهزة والأحجام.",
         icon: <FontAwesomeIcon className="feature-icon color" icon={faMobileScreenButton} />
        },
        {
            id: 2,
            title: "أداء عالي",
            des: "سرعة تنفيذ وتحميل محسنة.",
           icon: <FontAwesomeIcon className="feature-icon color" icon={faTachometerAlt} />
          },
          {
            id: 3,
            title: "التخطيط المسبق",
            des: "وضع تصميم دقيق قبل بدء كتابة الأكواد لضمان التنفيذ الناجح.",
           icon: <FontAwesomeIcon className="feature-icon color" icon={faCompass} />
          },
          {
            id: 3,
            title: "تصميم التنفيذ",
            des: "تصميم خريطة العمل مسبقًا لضمان سير العمل بشكل سلس وفعال",
           icon: <FontAwesomeIcon className="feature-icon color" icon={faDraftingCompass} />
          },
       
      ];
    return (
        <div className="setps" id='featuresid'>
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>لماذا نحن؟</h2>
                <span className="line"></span>
              </div>
            </div>
            <Fade top>
        <div className="row g-4">
        {DeatelisSection.map((item, index) => (
            <div className="col-md-4" key={index}>
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-iconfet mx-auto">
                            {item.icon}
                        </div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.des}</p>
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

export default Features
