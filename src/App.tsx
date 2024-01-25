import "./App.css";
import BrandCarousel from "./Components/Carrousels/BrandCarousel";
import AdsCarousel from "./Components/Carrousels/AdsCarousel";
import Header from "./Header/Header";

function App() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return (
    <>
      <Header />
      {/* <div className="py-6">
        <AdsCarousel />
      </div>

      <BrandCarousel /> */}
      {arr.map((e) => {
        return <div>{e}</div>;
      })}
    </>
  );
}

export default App;
