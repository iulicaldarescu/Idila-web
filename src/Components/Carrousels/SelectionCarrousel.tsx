import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import selection from "../../selection.json";
import Selection from "../Selections/Selection";

function SelectionCarrousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyload: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  console.log(selection.selections);

  return (
    <section className="pb-20">
      <div className="text-center mt-10">
        <p>Alege din selectia noastra</p>
      </div>

      <div className="">
        <Slider {...settings}>
          {selection.selections.map((selection) => {
            return (
              <Selection
                selectionImage={selection.image}
                selectionCategory={selection.category}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default SelectionCarrousel;
