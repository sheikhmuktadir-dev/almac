import { useEffect, useState } from "react";
import Section from "../../Components/Section/Section";
import Style from "./about.module.css";
import { legacyData } from "../../Data/DataMain";
import bannerImage from "/images/about/lagacybanner.webp";

export default function Legacy() {
  const { banner, years, description } = legacyData || {};

  const [level, setLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const newLevel = Math.min(Math.floor(y / 60), 10);
      setLevel(newLevel);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section>
      <div className={`${Style.lagacySection}`}>
        <h2 className={`${Style.lagacyYears} ${Style[`text${level}`]}`}>
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

        <p className={`${Style.lagacyPara} ${Style[`text${level}`]}`}>
          {description ||
            "Almac Real Estate is a UAE-based property company built on innovation and integrity. Founded by passionate entrepreneurs, we focus on quality-driven real estate solutions."}
        </p>
      </div>
    </Section>
  );
}
