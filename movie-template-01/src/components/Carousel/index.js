import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem, Navbar } from "components";

/**
 * Swiper Styles
 */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

/**
 * Swiper Modules
 */
import { Navigation, EffectFade, Autoplay, Keyboard } from "swiper";

/**
 * React Icons
 */
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = ({ popularMovies = [] }) => {
  const swiperRef = useRef();
  const swiperSettings = {
    modules: [Navigation, EffectFade, Autoplay, Keyboard],
    spaceBetween: 50,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    speed: 500,
    centeredSlides: true,
    keyboard: true,
    autoplay: {
      delay: 3500,
    },
    onBeforeInit: (swiper) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <>
      <Swiper {...swiperSettings}>
        {popularMovies.map((singlePopularMovie) => {
          return (
            <SwiperSlide key={singlePopularMovie.id}>
              <CarouselItem singlePopularMovie={singlePopularMovie} />
            </SwiperSlide>
          );
        })}
        <button
          className="swiper-button-prev after:hidden"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span className="text-gray-500 hover:text-gray-100 text-3xl">
            <BsFillArrowLeftCircleFill />
          </span>
        </button>
        <button
          className="swiper-button-next after:hidden"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span className="text-gray-500 hover:text-gray-100 text-3xl">
            <BsFillArrowRightCircleFill />
          </span>
        </button>
      </Swiper>
    </>
  );
};

export default Carousel;