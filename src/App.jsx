import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroScetion from "./components/HeroScetion";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroScetion />
      </div>
      <Footer />
    </>
  );
}

export default App;
