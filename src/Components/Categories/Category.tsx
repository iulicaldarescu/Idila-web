import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

function Category() {
  const [showOnOff, setShowOnOf] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    setContainerHeight(showOnOff ? 250 : 0); // Adjust the height as needed
  }, [showOnOff]);

  const showMore = () => {
    setShowOnOf(!showOnOff);
  };

  return (
    <li className="border-y-[1px] pt-3 pb-1 px-4 flex flex-col gap-2">
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
      {/* this remains in code even if the menu category is closed from GUI but if we use {showOnOff && ...} it cancelling progressive effect */}
      <div
        className="pl-4 flex flex-col gap-2 text-[15px]"
        style={{
          maxHeight: `${containerHeight}px`,
          overflow: "auto",
          transition: "max-height 0.7s ease",
        }}
      >
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
        <p>ASasdasdasd</p>
      </div>
    </li>
  );
}

export default Category;
