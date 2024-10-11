import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

import rectangle9521 from "../../assets/backgrounds/Rectangle 9521.webp";
import rectangle9522 from "../../assets/backgrounds/Rectangle 9522.webp";
import rectangle9523 from "../../assets/backgrounds/Rectangle 9523.webp";
import rectangle9524 from "../../assets/backgrounds/Rectangle 9524.webp";
import rectangle9525 from "../../assets/backgrounds/Rectangle 9525.webp";
import rectangle9521light from "../../assets/backgrounds/Rectangle 9521light.webp";
import rectangle9522light from "../../assets/backgrounds/Rectangle 9522light.webp";
import rectangle9523light from "../../assets/backgrounds/Rectangle 9523light.webp";
import rectangle9524light from "../../assets/backgrounds/Rectangle 9524light.webp";
import rectangle9525light from "../../assets/backgrounds/Rectangle 9525light.webp";

import "./Backgrounds.css";
function Backgrounds() {
  const isDark = useContext(ThemeContext);

  return (
    <>
      {isDark && (
        <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
      )}

      {isDark ? (
        <img className="background2" src={rectangle9522} alt="background2" />
      ) : (
        <img
          className="background2"
          src={rectangle9522light}
          alt="background2Light"
        />
      )}
      {isDark ? (
        <img className="background3" src={rectangle9523} alt="background3" />
      ) : (
        <img
          className="background3"
          src={rectangle9523light}
          alt="background3Light"
        />
      )}

      {isDark ? (
        <img className="background4" src={rectangle9524} alt="background4" />
      ) : (
        <img
          className="background4"
          src={rectangle9524light}
          alt="background4Light"
        />
      )}
      {isDark ? (
        <img className="background5" src={rectangle9525} alt="background5" />
      ) : (
        <img
          className="background5"
          src={rectangle9525light}
          alt="background5Light"
        />
      )}

      {isDark ? (
        <img className="background1" src={rectangle9521} alt="background1" />
      ) : (
        <img
          className="background1"
          src={rectangle9521light}
          alt="background1Light"
        />
      )}
    </>
  );
}

export default Backgrounds;
