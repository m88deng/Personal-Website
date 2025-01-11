import { useState, useEffect } from "react";
import { StyledHero } from "../styles/Hero.styled.js";
import bgLight from "./../assets/background_light.png";
import bgDark from "./../assets/background_dark.png";
import bgCloud from "./../assets/clouds.png";

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <StyledHero
      background={isDarkMode ? bgDark : bgLight}
      className="hero d-flex flex-column justify-content-center align-items-center"
    >
      {!isDarkMode && (
        <img className="bgLightCloud" src={bgCloud} alt=""/>
      )}
    </StyledHero>
  );
}
