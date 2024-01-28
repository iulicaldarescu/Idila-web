import "./App.css";
import Carrousels from "./Components/Carrousels/Carrousels";
import DiscoverBrands from "./Components/Discover-brands/DiscoverBrands";
import supabase from "./config/supabaseClient.js";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  console.log(supabase);

  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Carrousels />
      <DiscoverBrands />

      {arr.map((e) => {
        return <div>{e}</div>;
      })}
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
