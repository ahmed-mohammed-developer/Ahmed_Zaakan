import React from 'react'
import './seteps.css'


const Seteps = () => {
    return (
        <div className="setps">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>خطوات العمل</h2>
                <span className="line"></span>
              </div>
            </div>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            1
                        </div>
                        <h5 class="card-title">التواصل</h5>
                        <p class="card-text">فهم إحتياجات العميل ومناقشة أهم الأدوات وطرق الحصول على أفضل نتيجة مرضية .</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            2
                        </div>
                        <h5 class="card-title">التخطيط</h5>
                        <p class="card-text">وضع مدة محددة لإستلام المعلومات من العميل وتحديد أوقات التواصل ومراحلة بناء المشروع .</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            3
                        </div>
                        <h5 class="card-title">البدء بالعمل</h5>
                        <p class="card-text">بعد الإتفاق على جميع جوانب المشروع من قبل كل الأطراف , يتم البدء في العمل وفق الخطة المرسومة .</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            4
                        </div>
                        <h5 class="card-title">التسليم الأولي</h5>
                        <p class="card-text">تعد أهم خطوة التسليم الأولي للمشروع , حيث يتم وضع الملاحطات والتعديلات المقترحة .</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            5
                        </div>
                        <h5 class="card-title">التسليم النهائي</h5>
                        <p class="card-text">بعد إنتهاء خطوة التسليم الأولي , ووضع التعديلات النهائية يتم تسليم النهائي للمشروع</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card step-card">
                    <div class="card-body text-center">
                        <div class="step-icon mx-auto">
                            6
                        </div>
                        <h5 class="card-title">تفعيل الضمان</h5>
                        <p class="card-text">سريان الضمان والإصلاح حسب المدة المتفق عليها ووفق أوقات الصيانة والطوارىء</p>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </div>
      );
}

export default Seteps