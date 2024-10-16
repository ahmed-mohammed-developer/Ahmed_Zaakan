import './Mybooks.css'
import data from "../../../public/data.json";
import { FaArrowDown } from "react-icons/fa";






const Mybooks = () => {
  const datamybooks = data.mybooks;
  return (
    <div className="latestworks" id="Mybooks">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>المؤلفات</h2>
            <span className="line"></span>
          </div>
          {datamybooks.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
               <div className="card cardlastprojict">
              <a href={item.down} target="_blank">
                <div></div>
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
                </a>
                <div className="moreread">
                    <a href={item.down} target="_blank">
                         تحميل الكتاب
                         <FaArrowDown  className="pe-2 downbookicon"/>
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

export default Mybooks;
