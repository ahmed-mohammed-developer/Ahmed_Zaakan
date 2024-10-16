import './Services.css';

const Services = () => {
  return (
    <div className="latestworks" id="Services" style={{backgroundColor: "#fff"}}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>الخدمات</h2>
            <span className="line"></span>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2">
                <div className="serv-section-2-icon"> <i className="fa-solid fa-object-group"></i> </div>
                <div className="serv-section-desc">
                  <h4> مواقع الويب</h4>
                  <h5>برمجة وتصميم مواقع الويب</h5>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2 serv-section-2-act">
                <div className="serv-section-2-icon serv-section-2-icon-act"> <i className="fas fa-cogs"></i> </div>
                <div className="serv-section-desc">
                  <h4>الإدارة</h4>
                  <h5>إدارة مواقع الويب</h5>
                </div>
                <div className="section-heading-line-left"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="serv-section-2">
                <div className="serv-section-2-icon"> <i className="fa-solid fa-code"></i> </div>
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
    </div>
  );
};

export default Services;
