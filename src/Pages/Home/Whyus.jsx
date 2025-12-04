import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import Section from "../../Components/Section/Section";
import WhyusCard from "../../Components/Card/WhyusCard";
import { useEffect, useState } from "react";
import { whyUsData } from "../../Data/DataMain";
import NotFound from "../../Components/ErrorHandler/NotFound";

export default function Whyus() {
  const [whyScroll, setWhyScroll] = useState(false);
  const { heading, paragraph, cards } = whyUsData || {};

  useEffect(() => {
    const whyHandleScroll = () => {
      if (window.scrollY > window.innerHeight - 400) {
        setWhyScroll(true);
      } else {
        setWhyScroll(false);
      }
    };

    window.addEventListener("scroll", whyHandleScroll);
    return () => window.removeEventListener("scroll", whyHandleScroll);
  }, []);

  return (
    <Section>
      <div
        className={`${Style.whyUsMain} ${
          whyScroll ? Style.whyUsScrollRadius : ""
        }`}
      >
        <Container>
          <h2
            className={`${Style.whyUsMainHeading} ${
              whyScroll ? Style.whyUsMainHeadingVisible : ""
            }`}
          >
            {heading?.line1 || "Why Almac"}
          </h2>

          <p className={Style.centerMainPara}>
            {paragraph ||
              "Premium properties, trusted service, and exceptional results."}
          </p>

          <div className={Style.whyUsMainFlexArea}>
            <div className={Style.whyUsMainFlex}>
              {cards?.length > 0 ? (
                cards.map((item, index) => {
                  return (
                    <WhyusCard
                      key={item?.title || index}
                      title={item?.title}
                      para={item?.description}
                      icon={item?.icon}
                    />
                  );
                })
              ) : (
                <NotFound>No features available</NotFound>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
