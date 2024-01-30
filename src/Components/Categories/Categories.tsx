import Category from "./Category";

type categoryItem = {
  id: string;
  category_name: string;
};

type CategoriesTypes = {
  productCategories: categoryItem[];
  setModalOnOff: (arg: boolean) => void;
};

function Categories({ productCategories, setModalOnOff }: CategoriesTypes) {
  return (
    <menu className="text-[18px] overflow-auto h-full pb-10">
      {/* am dat max height dincolo si forteaza asta in sus de nu se mai vede , poate il mutam altundeva in dom */}
      <p className="border-y-[1px] py-3 px-4 text-black">Autentificare</p>{" "}
      {productCategories.map((item: categoryItem) => {
        return <Category item={item} setModalOnOff={setModalOnOff} />;
      })}
    </menu>
  );
}

export default Categories;
