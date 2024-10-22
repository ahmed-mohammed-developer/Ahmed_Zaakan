import React from 'react'
import './features .css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';





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
        <div className="setps">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>لماذا نحن؟</h2>
                <span className="line"></span>
              </div>
            </div>
        <div class="row g-4">
        {DeatelisSection.map((item, index) => (
            <div class="col-md-4" key={index}>
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            {item.icon}
                        </div>
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.des}</p>
                    </div>
                </div>
            </div>
                ))}

        </div>
          </div>
        </div>
      );
}

export default Features
