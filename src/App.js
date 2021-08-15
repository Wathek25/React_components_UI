import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Card/Cards";
import Carousel from "./Components/Carousel/Carousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards />
    </div>
  );
}

export default App;
