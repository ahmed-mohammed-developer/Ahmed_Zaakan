import './Hero.css';
import data from '../../../public/data.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2, // عرض صورتين في نفس الوقت
  slidesToScroll: 1, // تمرير صورة واحدة في كل مرة
  adaptiveHeight: true,
  initialSlide: 0,
  rows: 1,
  slidesPerRow: 1,
  autoplay: true,
  autoplaySpeed: 60000,
  rtl: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
};

const Hero = () => {
  const dataHero = data.hero;
  return (
    <div className="hero" id='hero'>
      <div className="container">
        <Slider {...settings}>
          {dataHero.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="imghero">
                <img src={item.img} alt="News" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
