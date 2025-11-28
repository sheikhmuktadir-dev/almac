import Style from "./home.module.css";
import Section from "../../Components/Section/Section";
import Container from "../../Components/Container/Container";
import MediaCard from "../../Components/Card/MediaCard";
import Button from "../../Components/Button/Button";
import { mediaData } from "../../Data/DataMain";
import NotFound from "../../Components/ErrorHandler/NotFound";
import { motion } from "framer-motion";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";

export default function Media() {
  const { heading, description, cards, cta } = mediaData || {};
  return (
    <Section>
      <div className={Style.mediaSection}>
        <Container>
          <h2 className={Style.mediaMainHeading}>
            <span>{heading?.line1 || "Developer"}</span>
            <span>{heading?.line2 || "News & Media"}</span>
          </h2>

          <p className={Style.centerMainPara}>
            {description ||
              "Stay updated with the latest announcements, project launches, market insights, and corporate developments from Almac Estate."}
          </p>

          <motion.div
            className={Style.mediaCardArea}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {cards?.length > 0 ? (
              cards.map((item, index) => {
                return (
                  <MediaCard
                    key={item.id || index}
                    date={item.date}
                    image={item.image}
                    title={item.title}
                    url={item.link}
                  />
                );
              })
            ) : (
              <NotFound>No features available</NotFound>
            )}
          </motion.div>

          {/* media card mobile & tablet */}
          <div className={Style.mediaMobile}>
            <Slider duration={3000} space={20}>
              {cards?.length > 0 ? (
                cards.map((item, index) => (
                  <SwiperSlide key={index}>
                    <MediaCard
                      key={item.id || index}
                      date={item.date}
                      image={item.image}
                      title={item.title}
                      url={item.link}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <NotFound>No features available</NotFound>
              )}
            </Slider>
          </div>

          <div className={Style.mediaMainButtonArea}>
            <Button url={cta?.url}>{cta?.label || "View All"}</Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
