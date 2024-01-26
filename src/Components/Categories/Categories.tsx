import Category from "./Category";
const testArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function Categories() {
  return (
    <menu className="text-[15px] overflow-auto h-full pb-10">
      <p className="border-y-[1px] py-3 px-4">Autentificare</p>
      {testArr.map(() => {
        return <Category />;
      })}
    </menu>
  );
}

export default Categories;
