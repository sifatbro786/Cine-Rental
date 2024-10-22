import Footer from "./HomePage/Footer";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
