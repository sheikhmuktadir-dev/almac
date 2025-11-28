import Section from "../../Components/Section/Section";
import Slider from "../../Components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Style from "../Details/details.module.css";

export default function DetailsBanner({ data }) {
  return (
    <Section>
      <Slider duration={3000} space={0} totalSlide={1}>
        {data?.gallery?.length > 0 ? (
          data?.gallery?.map((list, index) => (
            <SwiperSlide key={index}>
              <div className={Style.detailsBanner}>
                <img
                  src={list}
                  key={index}
                  loading="lazy"
                  alt="gallery image"
                  className={Style.detailsBannerImage}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <NotFound>No Gallery</NotFound>
        )}
      </Slider>
    </Section>
  );
}
