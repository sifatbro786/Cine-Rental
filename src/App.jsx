import { useState } from "react";
import MovieList from "./HomePage/Cine/MovieList";
import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";
import { MovieContext } from "./context/index";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
