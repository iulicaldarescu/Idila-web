import chanel from "../../assets/Discover photos/chanel-discover.jpg";
import DiscoverProduct from "../Buttons/DiscoverProduct";

function ChanelBrand() {
  return (
    <>
      <div className="flex w-full">
        <div className="basis-7/12">
          <img src={chanel} className=" bg-cover"></img>
        </div>
        <div className=" basis-5/12">
          <p className="text-white">text description</p>
          <DiscoverProduct>Discover Chanel</DiscoverProduct>
        </div>
      </div>
    </>
  );
}

export default ChanelBrand;
