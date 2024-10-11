import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect, useCallback } from "react";
import NavBar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import useLocalStorage from "use-local-storage";
import Backgrounds from "./Components/Backgrounds/Backgrounds";
import TopButton from "./Components/Utils/TopButton/TopButton";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", prefersDark.matches);
  const [themeMode, setThemeMode] = useLocalStorage("themeMode", "system");

  const applyTheme = useCallback(
    (mode) => {
      setThemeMode(mode);
      if (mode === "system") {
        setIsDark(prefersDark.matches);
      } else {
        setIsDark(mode === "dark");
      }
    },
    [setIsDark, setThemeMode, prefersDark]
  );

  useEffect(() => {
    const handleChange = (e) => {
      if (themeMode === "system") {
        setIsDark(e.matches);
      }
    };

    prefersDark.addListener(handleChange);
    return () => prefersDark.removeListener(handleChange);
  }, [themeMode, setIsDark, prefersDark]);

  const toggleDarkMode = () => applyTheme("dark");
  const toggleLightMode = () => applyTheme("light");
  const toggleSystemMode = () => applyTheme("system");

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
