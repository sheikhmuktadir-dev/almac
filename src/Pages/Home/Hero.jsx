import Section from "../../Components/Section/Section";
import Style from "./home.module.css";
import { useEffect, useState } from "react";
import { heroData } from "../../Data/DataMain";
import heroImage from "/images/hero/hero.webp";
import scrollImage from "/images/other/ic-mouse.svg";

export default function Hero() {
  const [isScrolled, setIsScroll] = useState(false);

  useEffect(() => {
    const navScrollHandler = () => {
      setIsScroll(window.scrollY > 10);
    };

    document.addEventListener("scroll", navScrollHandler);
    return () => document.removeEventListener("scroll", navScrollHandler);
  }, []);

  const { titleOne, titleTwo, scrollText, image, scrollIcon, contact } =
    heroData;

  return (
    <Section position="sectionSticky">
      <div className={Style.heroMain}>
        <div className={Style.heroImageArea}>
          <img
            src={image || heroImage}
            alt="hero image"
            loading="lazy"
            className={Style.heroImageMain}
          />
        </div>

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

          <div className={Style.scrollDown}>
            <img
              src={scrollIcon || scrollImage}
              className={Style.scrollDownImage}
              alt="scroll image"
              loading="lazy"
            />
            <p className={Style.scrollDownText}>
              {scrollText || "Scroll Down"}
            </p>
          </div>

          <div className={Style.heroContact}>
            <a href={`tel:${contact?.phone}`} className={Style.heroContactLink}>
              {contact?.phone}
            </a>
            <a
              href={`mailto:${contact?.email}`}
              className={Style.heroContactLink}
            >
              {contact?.email}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
