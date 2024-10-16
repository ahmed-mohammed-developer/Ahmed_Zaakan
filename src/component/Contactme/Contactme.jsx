import './Contactme.css'





const Contactme = () => {
  return (
    <div className="Contactme" id="Contactme">
      <div className="container">
        <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
              <div className="card cardlastprojict">
              <div className="section-title titlecont">
            <h2>فلنصنع شياَ عظيماَ معاَ😊</h2>
          </div>
          <div className="user">
            <img src="https://i.postimg.cc/W4WrJyKZ/call.png" alt="user img" />
          </div>
          <div className="iconcontact">
          <i className="fa-solid fa-phone-flip iconcon"></i>
          <a href="tel:0506353350">0506353350</a>
          </div>
          <div className="iconcontact ">
          <i className="fas fa-envelope iconcon"></i>
          <a href="mailto:ahmed.mohammed.developer@gmail.com">ahmed.mohammed.developer@gmail.com</a>
          </div>
          <div className="iconcontact">
          <i className="fa-brands fa-square-whatsapp iconcon"></i>
          <a href="https://wa.me/966506353350">966506353350</a>
          </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contactme;
