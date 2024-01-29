import { Link } from "react-router-dom";

type itemObj = {
  id: string;
  category_name: string;
};

type itemType = {
  item: itemObj;
};

function Category({ item }: itemType) {
  return (
    <li className="border-y-[1px] py-3 px-4 flex flex-col gap-2">
      {/* main container */}
      <div className="flex items-center justify-between">
        <Link to={{ pathname: `/${item.category_name}` }} state={item.id}>
          {item.category_name}
        </Link>
      </div>
    </li>
  );
}

export default Category;
