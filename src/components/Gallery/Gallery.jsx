// for css
import "./Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Title from "../Title/Title";
function Gallery({ gallery_images }) {
  return (
    <section className="py-5 pd-x-5">
      <Title
        header="Testimonial"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="swiper_container gap-2"
      >
        {gallery_images?.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt="slide" className="rounded-0" />
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Gallery;
