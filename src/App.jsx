import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import "./fonts/Blisstrapy.ttf";
import rectangleImg from "./assets/Rectangle 9521.png";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <img className="background1" src={rectangleImg} alt="background1" />

    </div>
  );
}

export default App;
