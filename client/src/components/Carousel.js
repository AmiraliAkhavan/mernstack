import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ slides }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        display: "block",
        marginLeft: " auto",
        marginRight: " auto",
        width: "50%",
        borderRadius: "25px",
        marginBottom: "-15px",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
