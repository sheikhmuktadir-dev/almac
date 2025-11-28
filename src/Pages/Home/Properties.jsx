import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import StickyCard from "../../Components/Card/StickyCard";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { propertiesData } from "../../Data/DataMain";
import NotFound from "../../Components/ErrorHandler/NotFound";

export default function Properties({ property }) {
  const { heading, cta } = propertiesData || {};

  if (!property || property.length === 0)
    return <NotFound>No properties available at the moment</NotFound>;

  const propertiesCard = property?.properties?.slice(0, 3);

  return (
    <Section>
      <div className={Style.propertiesMain}>
        <Container>
          <h4 className={Style.propertyMainHeading}>
            {heading?.headingmain || "Our Luxury Properties"}
          </h4>
        </Container>

        <div className={Style.propertiesMainCardArea}>
          {propertiesCard?.length > 0 ? (
            <StickyCard properties={propertiesCard} />
          ) : (
            <NotFound>No properties available at the moment</NotFound>
          )}
        </div>

        <div className={Style.propertiesMainButtonArea}>
          <Button url={cta?.url || "/properties"}>
            {cta?.label || "View All"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
