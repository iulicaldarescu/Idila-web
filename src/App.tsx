import "./App.css";
import BrandCarousel from "./Components/Carrousels/BrandCarousel";
import AdsCarousel from "./Components/Carrousels/AdsCarousel";

function App() {
  return (
    <>
      <div className="py-6">
        <AdsCarousel />
      </div>

      <BrandCarousel />
    </>
  );
}

export default App;
