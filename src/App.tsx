import "./App.css";
import Carrousels from "./Components/Carrousels/Carrousels";
import DiscoverBrands from "./Components/Discover-brands/DiscoverBrands";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductCategory from "./pages/ProductCategory.js";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Carrousels /> <DiscoverBrands /> <Footer />{" "}
            </>
          }
        ></Route>

        <Route
          path="/:category_name"
          element={
            <>
              {" "}
              <Header />
              <ProductCategory />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
