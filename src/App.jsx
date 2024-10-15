import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import Backgrounds from "./Components/Backgrounds/Backgrounds";
import TopButton from "./Components/Utils/TopButton/TopButton";
import useTheme from "./hooks/useTheme";

function App() {
  const { isDark, toggleDarkMode, toggleLightMode, toggleSystemMode } =
    useTheme();

  return (
    <ThemeContext.Provider value={isDark}>
      <div className="App">
        <NavBar
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
          toggleLightMode={toggleLightMode}
          toggleSystemMode={toggleSystemMode}
        />

        <Home />

        <About />

        <Project />

        <Contact />

        <Footer />

        <Backgrounds />

        <TopButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
