import { useLocation } from "react-router-dom";

function ProductCategory() {
  const { state: id } = useLocation();

  console.log(id);
  return <div className="pt-96">{id}</div>;
}

export default ProductCategory;
