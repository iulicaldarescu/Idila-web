import "./App.css";
import Carrousels from "./Components/Carrousels/Carrousels";

import DiscoverBrands from "./Components/Discover-brands/DiscoverBrands";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

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
      <Footer />
    </>
  );
}

export default App;
