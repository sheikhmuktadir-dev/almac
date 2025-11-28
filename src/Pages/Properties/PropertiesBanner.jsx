import Style from "./properties.module.css";
import propertyImage from "/images/other/original.webp";
import Section from "../../Components/Section/Section";

export default function PropertiesBanner() {
  return (
    <Section>
      <div className={Style.propertyImageArea}>
        <img
          src={propertyImage}
          loading="lazy"
          alt="banner"
          className={Style.propertyImage}
        />
      </div>
    </Section>
  );
}
