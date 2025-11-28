import Section from "../../Components/Section/Section";
import Style from "./about.module.css";
import { teamDetails } from "../../Data/DataMain";
import TeamCard from "../../Components/Card/TeamCard";
import NotFound from "../../Components/ErrorHandler/NotFound";
import { useState } from "react";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";

export default function Team() {
  const { cards } = teamDetails || {};
  const [expandIndex, setExpandIndex] = useState(null);

  return (
    <Section>
      <div className={Style.teamSection}>
        {cards?.length > 0 ? (
          cards?.map((list, index) => {
            return (
              <TeamCard
                data={list}
                expandIndex={expandIndex}
                setExpandIndex={setExpandIndex}
                index={index}
                key={list.id || index}
              />
            );
          })
        ) : (
          <NotFound>No Team Data</NotFound>
        )}
      </div>

      {/* media card mobile & tablet */}
      <div className={Style.teamMobile}>
        <Slider duration={3000} space={0}>
          {cards?.length > 0 ? (
            cards.map((list, index) => (
              <SwiperSlide key={index}>
                <TeamCard
                  data={list}
                  expandIndex={expandIndex}
                  setExpandIndex={setExpandIndex}
                  index={index}
                  key={list.id || index}
                />
              </SwiperSlide>
            ))
          ) : (
            <NotFound>No Team Data</NotFound>
          )}
        </Slider>
      </div>
    </Section>
  );
}
