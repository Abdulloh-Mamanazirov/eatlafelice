import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

// import images
import {
  Pizza1,
  Pizza2,
  Pizza3,
  Pizza4,
  Pizza5,
  Pizza6,
  Pizza7,
  Pizza8,
} from "../../../assets";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    Pizza6,
    Pizza2,
    Pizza7,
    Pizza1,
    Pizza3,
    Pizza4,
    Pizza5,
    Pizza8,
  ];

  return (
    <section className="h-screen relative">
      <div className="z-50 absolute inset-0 bottom-28 grid place-items-center">
        <div className="text-center">
          <div>
            <p className="text-white text-4xl sm:text-6xl font-serif font-bold italic bg-carousel-title">
              We have the Best
            </p>
          </div>
          <div className="flex items-center justify-between text-4xl sm:text-6xl">
            <div className="w-fit bg-[#009133ee] px-4 py-2 rounded-lg rounded-t-none backdrop-blur-md">
              <p className="font-patua text-white tracking-widest">Pizza</p>
            </div>
            <div className="w-fit bg-white/80 px-5 py-2 rounded-lg rounded-t-none backdrop-blur-md">
              <p className="font-patua">&</p>
            </div>
            <div className="w-fit bg-[#e00016e5] px-4 py-2 rounded-lg rounded-t-none backdrop-blur-md">
              <p className="font-patua text-white tracking-widest">Pasta</p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        // spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        navigation={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper2"
      >
        {images?.map?.((image, ind) => (
          <SwiperSlide key={ind} className="overflow-hidden">
            <img src={image} alt="pizza image" className="zoom-animation" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        navigation={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
        }}
        className="mySwiper sidebar-bg"
        style={{
          backgroundRepeat: "repeat",
        }}
      >
        {images?.map?.((image, ind) => (
          <SwiperSlide key={ind}>
            <img src={image} alt="pizza slider image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
