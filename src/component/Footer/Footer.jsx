import './Footer.css'




const Footer = () => {
    const year = new Date().getFullYear(); // يحصل على السنة الحالية
  return (
    <div className='footer'>
      <div className="main-footer ">
        <div className="container">
            <div className="row mb-5 baner">
                <div className="col-lg-3 col-md-6 col-sm-6 imgSection marginBottom">
                <a href="#">
                <h1>أحمد زعــــكان</h1>
                </a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="deatelsSection">
                        <h3>الأقسام</h3>
                        <a href="#hero"><p>الرئيسية</p></a>
                        <a href="#Latestworks"><p>أحدث الأعمال</p></a>
                        <a href="#Latestarticles"><p>أحدث المقالات</p></a>
                        <a href="#Mybooks"><p>المؤلفات</p></a>
                        <a href="#Services"><p>الخدمات</p></a>
                        <a href="#Contactme"><p className='marginBottom'>تواصل معي</p></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection">
                        <h3>تعلم البرمجة</h3>
                        <a href="https://satr.codes/" target="_blank"><p>منصة سطر التعليمية</p></a>
                        <a href="https://elzero.org/" target="_blank"><p>أكاديمية الزيرو</p></a>
                        <a href="https://harmash.com/" target="_blank"><p>هرمش</p></a>
                        <a href="https://learnjavascript.online/?utm_source=jadjoubran.io" target="_blank"><p>JavaScript</p></a>
                        <a href="https://learnhtmlcss.online/?utm_source=jadjoubran.io" target="_blank"><p>Html & Css</p></a>
                        <a href="https://react-tutorial.app/?utm_source=jadjoubran.io" target="_blank"><p className='marginBottom'>React</p></a>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
                <div className="deatelsSection marginBottom">
                        <h3>أبقى على تواصل</h3>
                        <a href="https://x.com/ahmed_M_Js" target='_blank'><i className="fa-brands fa-x-twitter footericon"></i></a>
                        <a href="https://www.linkedin.com/in/ahmedmohammeddeveloper/" target='_blank'><i className="fa-brands fa-linkedin footericon"></i></a>
                        <a href="mailto:ahmed.mohammed.developer@gmail.com"><i className="fa-regular fa-envelope-open footericon"></i></a>
                        
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
