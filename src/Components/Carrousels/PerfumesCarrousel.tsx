import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import perfumes from "../../perfumes.json";
import Perfume from "../Perfumes/Perfume";

function PerfumesCarrousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <section>
      <p className="text-center">Parfumuri la reducere</p>

      <div>
        <Slider {...settings}>
          {perfumes.perfumes.map((perfume, index) => {
            if (perfume.onSale) {
              return (
                <Perfume
                  perfumePhoto={perfume.photo}
                  perfumeBrand={perfume.brand}
                  perfumeName={perfume.name}
                />
              );
            }
            return null;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default PerfumesCarrousel;
