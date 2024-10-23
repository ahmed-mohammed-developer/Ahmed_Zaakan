import './footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';





const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (

    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-2 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <h2>أحمد زعــــكان</h2>
                </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>الأقسام</h3>
                        <a href="#heroid"><p>الرئيسية</p></a>
                        <a href="#servicesid"><p>الخدمات</p></a>
                        <a href="#setpsid"><p>خطوات العمل</p></a>
                        <a href="#technologiesusedid"><p>التقنيات المستخدمة</p></a>
                        <a href="#featuresid"><p>لماذا نحن</p></a>
                        <a href="#Contactme"><p className='marginBottom'>تواصل معنا</p></a>
                    </div>
                </div>
               
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection">
                        <h3>تعلم البرمجة</h3>
                        <a href="https://satr.codes/" target="_blank" rel='noreferrer'><p>منصة سطر التعليمية</p></a>
                        <a href="https://elzero.org/" target="_blank" rel='noreferrer'><p>أكاديمية الزيرو</p></a>
                        <a href="https://harmash.com/" target="_blank" rel='noreferrer'><p>هرمش</p></a>
                        <a href="https://learnjavascript.online/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p>JavaScript</p></a>
                        <a href="https://learnhtmlcss.online/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p>Html & Css</p></a>
                        <a href="https://react-tutorial.app/?utm_source=jadjoubran.io" target="_blank" rel='noreferrer'><p className='marginBottom'>React</p></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection  marginb">
                        <h3>أبقى على تواصل</h3>
                        <a href="https://x.com/ahmed_M_Js" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faXTwitter} className="footericon"/></a>
                        <a href="https://www.linkedin.com/in/ahmedmohammeddeveloper/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="footericon"/></a>
                        <a href="mailto:ahmed.mohammed.developer@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} className="footericon"/></a>
                        
                </div>
                <div className="deatelsSection marginBottom">
                        <a href="https://ahmedmohammeddeveloper.blogspot.com/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faBloggerB}className="footericon"/></a>
                        <a href="https://ahmedzaakan.blogspot.com/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faAlignLeft}  className="footericon"/></a>
                </div>
                </div>
            </div>
            <div className="row baner">
                <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="deatelsSection marginBottom">
                        <h3>جميع الحقوق محفوظة</h3>
                        <p>أحمد {year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
