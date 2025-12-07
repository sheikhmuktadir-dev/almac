import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function Slider({ children, duration, totalSlide, space }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={space || 0}
      navigation
      autoplay={{ delay: duration, disableOnInteraction: false }}
      speed={1200}
      loop={true}
      grabCursor={true}
      slidesPerGroup={1}
      breakpoints={{
        320: { slidesPerView: 1 },
        481: { slidesPerView: 1.3 },
        768: { slidesPerView: totalSlide },
        1280: { slidesPerView: totalSlide },
      }}
    >
      {children}
    </Swiper>
  );
}
