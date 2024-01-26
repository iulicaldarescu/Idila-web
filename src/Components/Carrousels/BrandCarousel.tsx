import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logos from "../../brand-logos.json";
import Brand from "../Brands/Brand";

import { useEffect, useState } from "react";

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
    autoplay: false,
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
  console.log(logos.brands[0].logo);

  return (
    <div className="px-6 ">
      <Slider {...settings} className={` `}>
        {logos.brands.map((brand) => {
          return <Brand brandLogo={brand.logo} brandName={brand.name} />;
        })}
      </Slider>
    </div>
  );
}

export default BrandCarousel;
