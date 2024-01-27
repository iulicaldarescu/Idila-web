import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function Category() {
  const [showOnOff, setShowOnOf] = useState<boolean>(false);
  const showMore = () => {
    setShowOnOf(!showOnOff);
  };
  return (
    <li className="border-y-[1px] py-3 px-4 flex flex-col gap-2">
      {/* main container */}
      <div className="flex items-center justify-between">
        <p>Promotii</p>
        {!showOnOff ? (
          <IoIosArrowForward
            onClick={showMore}
            style={{
              color: "black",
              backgroundColor: "white",
              height: "22px",
              width: "22px",
            }}
          />
        ) : (
          <IoIosArrowDown
            onClick={showMore}
            style={{
              color: "black",
              backgroundColor: "white",
              height: "22px",
              width: "22px",
            }}
          />
        )}
      </div>

      {/* show more container */}
      {showOnOff && (
        <div className="text-[15px] pl-4 flex flex-col gap-1">
          <p>ASasdasdasd</p>
          <p>ASasdasdasd</p>
          <p>ASasdasdasd</p>
          <p>ASasdasdasd</p>
        </div>
      )}
    </li>
  );
}

export default Category;
