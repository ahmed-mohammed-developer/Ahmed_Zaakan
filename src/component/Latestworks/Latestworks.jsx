import "./Latestworks.css";
import data from "../../../public/data.json";





const Latestworks = () => {
  const dataprogict = data.progict;
  return (
    <div className="latestworks" id="Latestworks">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>أحدث الأعمال</h2>
            <span className="line"></span>
          </div>
          {dataprogict.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="card cardlastprojict">
              <a href={item.qalip} target="_blank">
                <img className="card-img-top" src={item.img} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                </a>
              <ul>
                <li><a href={item.download} target="_blank"><i className="fa-brands fa-github" aria-hidden="true"></i></a></li>
                <li><a href={item.view} target="_blank"><i className="fa-regular fa-eye" aria-hidden="true"></i></a></li>
                <li><a href={item.qalip} target="_blank"><i className="fas fa-mapfas fa-location-arrow" aria-hidden="true"></i></a></li>
            </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestworks;
