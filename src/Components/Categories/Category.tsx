import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type itemObj = {
  id: string;
  category_name: string;
};

type itemType = {
  item: itemObj;
};

function Category({ item }: itemType) {
  const [showOnOff, setShowOnOf] = useState<boolean>(false);
  const showMore = () => {
    setShowOnOf(!showOnOff);
  };

  return (
    <li className="border-y-[1px] py-3 px-4 flex flex-col gap-2">
      {/* main container */}
      <div className="flex items-center justify-between">
        <p>{item.category_name}</p>
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
      {/* this remains in code even if the menu category is closed from GUI but if we use {showOnOff && ...} it cancelling progressive effect */}
      {showOnOff && (
        <div className="pl-4 flex flex-col gap-2 text-[15px]">
          <p>ASasdasdasd</p>
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
