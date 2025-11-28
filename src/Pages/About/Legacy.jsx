import { useEffect, useState } from "react";
import Section from "../../Components/Section/Section";
import Style from "./about.module.css";
import { legacyData } from "../../Data/DataMain";
import bannerImage from "/images/about/lagacybanner.webp";
import bgImage from "/images/other/uaemap.png";

export default function Legacy() {
  const { banner, dotBg, years, description } = legacyData || {};

  const [level, setLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const newLevel = Math.min(Math.floor(y / 20), 10);
      setLevel(newLevel);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section>
      <div className={`${Style.lagacySection}`}>
        <h2 className={Style.lagacyYears}>
          <b>{years.count || "30"}</b>
          <span>{years.text || "years of Incredible Legacy"}</span>
        </h2>

        <div className={`${Style.lagacyImageArea} ${Style[`level${level}`]}`}>
          <img
            src={banner || bannerImage}
            alt="lagacy image"
            loading="lazy"
            className={Style.lagacyImage}
          />
        </div>

        <img
          src={dotBg || bgImage}
          loading="lazy"
          alt="bg image"
          className={Style.lagacyDotBg}
        />

        <p className={Style.lagacyPara}>
          {description ||
            "Almac Real Estate is a UAE-based property company built on innovation and integrity. Founded by passionate entrepreneurs, we focus on quality-driven real estate solutions."}
        </p>
      </div>
    </Section>
  );
}
