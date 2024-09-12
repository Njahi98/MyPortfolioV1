import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import "./fonts/Blisstrapy.ttf";
import rectangle9521 from "./assets/Rectangle 9521.png";
import rectangle9522 from "./assets/Rectangle 9522.png";
import rectangle9523 from "./assets/Rectangle 9523.png";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <img className="background2" src={rectangle9522} alt="background2" />
      <img className="background3" src={rectangle9523} alt="background3" />
      <About/>


      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <img className="background1" src={rectangle9521} alt="background1" />


    </div>
  );
}

export default App;
