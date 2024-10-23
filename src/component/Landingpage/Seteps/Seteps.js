import React from 'react'
import './seteps.css'
import Fade from 'react-reveal/Fade';



const Seteps = () => {
    return (
        <>
        <div className="setps" id='setpsid'>
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>خطوات العمل</h2>
                <span className="line"></span>
              </div>
            </div>
            <Fade top>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            1
                        </div>
                        <h5 className="card-title">التواصل</h5>
                        <p className="card-text">فهم إحتياجات العميل ومناقشة أهم الأدوات وطرق الحصول على أفضل نتيجة مرضية .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            2
                        </div>
                        <h5 className="card-title">التخطيط</h5>
                        <p className="card-text">وضع مدة محددة لإستلام المعلومات من العميل وتحديد أوقات التواصل ومراحلة بناء المشروع .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            3
                        </div>
                        <h5 className="card-title">البدء بالعمل</h5>
                        <p className="card-text">بعد الإتفاق على جميع جوانب المشروع من قبل كل الأطراف , يتم البدء في العمل وفق الخطة المرسومة .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            4
                        </div>
                        <h5 className="card-title">التسليم الأولي</h5>
                        <p className="card-text">تعد أهم خطوة التسليم الأولي للمشروع , حيث يتم وضع الملاحطات والتعديلات المقترحة .</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            5
                        </div>
                        <h5 className="card-title">التسليم النهائي</h5>
                        <p className="card-text">بعد إنتهاء خطوة التسليم الأولي , ووضع التعديلات النهائية يتم تسليم النهائي للمشروع</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card step-card">
                    <div className="card-body text-center">
                        <div className="step-icon mx-auto">
                            6
                        </div>
                        <h5 className="card-title">تفعيل الضمان</h5>
                        <p className="card-text">سريان الضمان والإصلاح حسب المدة المتفق عليها ووفق أوقات الصيانة والطوارىء</p>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
          </div>
        </div>
        </>
      );
}

export default Seteps