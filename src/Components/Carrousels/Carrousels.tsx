import BrandCarousel from "./BrandCarousel";
import AdsCarousel from "./AdsCarousel";
import Selection from "./SelectionCarrousel";
import PerfumesCarrousel from "./PerfumesCarrousel";

function Carrousels() {
  return (
    <div>
      {" "}
      <div className="py-6">
        <AdsCarousel />
      </div>
      <BrandCarousel />
      <Selection />
      <PerfumesCarrousel />
    </div>
  );
}

export default Carrousels;
