import chanel from "../../assets/Discover photos/chanel-discover.jpg";

function ChanelBrand() {
  return (
    <>
      <div className="flex w-full">
        <div className="basis-7/12">
          <img src={chanel} className=" bg-cover"></img>
        </div>
        <div className="bg-black basis-5/12">
          <p className="text-white">text description</p>
        </div>
      </div>
    </>
  );
}

export default ChanelBrand;
