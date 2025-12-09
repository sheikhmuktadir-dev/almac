import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import { useEffect, useState } from "react";
import { heroData } from "../../Data/DataMain";
import heroFallback from "/images/hero/hero.webp";
import scrollImage from "/images/other/ic-mouse.svg";
import Container from "../../Components/Container/Container";

export default function Hero() {
  const [isScrolled, setIsScroll] = useState(false);
  const [randomHero, setRandomHero] = useState(null);

  const { titleOne, titleTwo, scrollText, image, scrollIcon } = heroData;

  // Pick random image on refresh
  useEffect(() => {
    if (Array.isArray(image) && image.length > 0) {
      const randomIndex = Math.floor(Math.random() * image.length);
      setRandomHero(image[randomIndex]);
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const heroScrollHandler = () => {
      setIsScroll(window.scrollY > 10);
    };

    document.addEventListener("scroll", heroScrollHandler);
    return () => document.removeEventListener("scroll", heroScrollHandler);
  }, []);

  return (
    <Section position="sectionSticky">
      <div className={Style.heroMain}>
        <div className={Style.heroImageArea}>
          <img
            src={randomHero || heroFallback}
            alt="hero image"
            loading="lazy"
            className={Style.heroImageMain}
          />
        </div>

        <Container>
          <div className={Style.heroContentArea}>
            <div
              className={`${Style.heroTextOne} ${
                isScrolled ? Style.scrolled : ""
              }`}
            >
              {titleOne || "Almac"}
            </div>

            <div
              className={`${Style.heroTextTwo} ${
                isScrolled ? Style.scrolled : ""
              }`}
            >
              {titleTwo || "Legacy"}
            </div>
          </div>
        </Container>

        <div className={Style.scrollDown}>
          <img
            src={scrollIcon || scrollImage}
            className={Style.scrollDownImage}
            alt="scroll image"
            loading="lazy"
          />
          <p className={Style.scrollDownText}>{scrollText || "Scroll Down"}</p>
        </div>
      </div>
    </Section>
  );
}
