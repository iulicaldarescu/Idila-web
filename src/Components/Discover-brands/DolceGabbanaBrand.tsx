import discoverDolce from "../../assets/Discover photos/discoverDolceGabbana.jpg";
import DiscoverProduct from "../Buttons/DiscoverProduct";

function DolceGabbanaBrand() {
  return (
    <div className="relative">
      <div className="border border-black absolute">
        <img src={discoverDolce} className="" alt="Discover Dolce" />
      </div>

      <div className="absolute right-0">
        <DiscoverProduct>Discover Dolce</DiscoverProduct>
      </div>
    </div>
  );
}

export default DolceGabbanaBrand;
