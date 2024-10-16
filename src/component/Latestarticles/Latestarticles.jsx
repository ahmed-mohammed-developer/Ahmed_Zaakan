import "./Latestarticles.css";
import data from "../../../public/data.json";
import { FaChevronLeft } from "react-icons/fa";





const Latestarticles = () => {
  const datablog = data.blog;
  return (
    <div className="latestworks" id="Latestarticles" style={{backgroundColor: "#fff"}}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>أحدث المقالات</h2>
            <span className="line"></span>
          </div>
          {datablog.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
              <a href={item.view} target="_blank">
                <div></div>
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text line3">{item.description}</p>
                </div>
                </a>
                <div className="moreread">
                    <a href={item.view} target="_blank">
                        إقرأ المزيد
                         <FaChevronLeft className="pe-2"/>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestarticles;
