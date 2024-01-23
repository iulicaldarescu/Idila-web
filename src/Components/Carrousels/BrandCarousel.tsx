import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";

const perfumeBrands = [
  "Chanel",
  "Dior",
  "Gucci",
  "Tom Ford",
  "Yves Saint Laurent",
  "Prada",
  "Versace",
  "Armani",
  "Bvlgari",
  "Calvin Klein",
  "Marc Jacobs",
  "Givenchy",
  "Hermès",
  "Ralph Lauren",
  "Jo Malone",
  "YSL (Yves Saint Laurent)",
  "Dolce & Gabbana",
  "Burberry",
  "Clinique",
  "Estée Lauder",
];

function BrandCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isSlideDots, setIsSlideDots] = useState(false);

  const settings = {
    dots: isSlideDots,
    infinite: true,
    speed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setIsSlideDots(false);
      } else {
        setSlidesToShow(3);
        setIsSlideDots(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-6">
      <Slider {...settings} className={`bg-blue-600 `}>
        {perfumeBrands.map((perfume) => {
          return (
            <div
              className={`text-center bg-red-400 py-8 h-20 text-xs border border-gray-400`}
            >
              <p>{perfume}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BrandCarousel;
