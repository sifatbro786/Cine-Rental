import { useContext } from "react";
import MovieList from "../HomePage/Cine/MovieList";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
import Sidebar from "../HomePage/Sidebar";
import { ThemeContext } from "../context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
