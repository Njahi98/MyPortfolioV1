import { useEffect, useCallback } from "react";
import useLocalStorage from "use-local-storage";

const useTheme = () => {
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

    prefersDark.addEventListener("change",handleChange);
    return () => prefersDark.removeEventListener("change",handleChange);
  }, [themeMode, setIsDark, prefersDark]);

  const toggleDarkMode = () => applyTheme("dark");
  const toggleLightMode = () => applyTheme("light");
  const toggleSystemMode = () => applyTheme("system");

  return {
    isDark,
    themeMode,
    toggleDarkMode,
    toggleLightMode,
    toggleSystemMode,
  };
};

export default useTheme;
