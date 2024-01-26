import "./App.css";
import Carrousels from "./Components/Carrousels/Carrousels";
import Header from "./Header/Header";
import DiscoverBrands from "./Components/Discover-brands/DiscoverBrands";

function App() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  return (
    <>
      <Header />

      <Carrousels />
      <DiscoverBrands />

      {arr.map((e) => {
        return <div>{e}</div>;
      })}
    </>
  );
}

export default App;
