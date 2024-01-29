import discoverDolce from "../../assets/Discover photos/discoverDolceGabbana.jpg";
import DiscoverProduct from "../Buttons/DiscoverProduct";

function DolceGabbanaBrand() {
  return (
    <div className="">
      <div className="border border-black">
        <div className="relative">
          <img src={discoverDolce} className="" alt="Discover Dolce" />
          <div className="absolute right-0 top-0">
            <DiscoverProduct>Discover Dolce</DiscoverProduct>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DolceGabbanaBrand;
