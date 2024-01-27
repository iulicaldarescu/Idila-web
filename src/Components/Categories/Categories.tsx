import Category from "./Category";
const testArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function Categories() {
  return (
    <menu className="text-[18px] overflow-auto h-full pb-10">
      {/* am dat max height dincolo si forteaza asta in sus de nu se mai vede , poate il mutam altundeva in dom */}
      <p className="border-y-[1px] py-3 px-4 text-black">Autentificare</p>{" "}
      {testArr.map(() => {
        return <Category />;
      })}
    </menu>
  );
}

export default Categories;
