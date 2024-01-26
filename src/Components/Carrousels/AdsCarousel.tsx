import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ad1 from "../../assets/Ads Photos/cottonbro-studio.jpg";
import ad2 from "../../assets/Ads Photos/venuss.jpg";

function AdsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <div className="bg-[#f1ecf1]">
      <div className="">
        <Slider {...settings}>
          <div className="">
            <div className="flex items-center">
              <img src={ad1} className="w-1/2"></img>
              <p>text aici, reduceri etc</p>
            </div>
          </div>

          <div className="">
            <div className="flex items-center flex-row-reverse">
              <img src={ad2} className="w-1/2 h-full bg-cover"></img>
              <p>text aici, reduceri etc</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AdsCarousel;
