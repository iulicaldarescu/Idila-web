import ad from "../../assets/cosmetics.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arr = [ad, ad, ad];

function AdsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <div className="bg-[#f1ecf1]">
      <div className="w-4/5 m-auto ">
        <Slider {...settings}>
          {arr.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Ad ${index + 1}`}
              className="h-32 opacity-70"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AdsCarousel;
