import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroScetion from "./components/HeroScetion";
import TaskBoard from "./components/task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroScetion />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
