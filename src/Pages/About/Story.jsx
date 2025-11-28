import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import Style from "./about.module.css";
import Accordion from "../../Components/Accordion/Accordion";
import { ourStoryData } from "../../Data/DataMain";

export default function Story() {
  return (
    <Section>
      <div className={Style.storySection}>
        <Container>
          <Accordion data={ourStoryData || []} />
        </Container>
      </div>
    </Section>
  );
}
