import { IoIosArrowForward } from "react-icons/io";

function Category() {
  return (
    <li className="flex items-center justify-between border-y-[1px] py-3 px-4">
      <p>Promotii</p>
      <IoIosArrowForward
        style={{
          color: "black",
          backgroundColor: "white",
          height: "22px",
          width: "22px",
        }}
      />
    </li>
  );
}

export default Category;
