import { useAppSelector } from "../../redux/hooks";
import { Movie, OnTheatresProps } from "../../types/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Trending: React.FC<OnTheatresProps> = ({ searchForId }) => {
  const { series } = useAppSelector((state) => state);
  const trending = series.series.trendingSeries.results;
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        direction={"horizontal"}
        breakpoints={{
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="lg:h-[20rem] w-[90vw] flex flex-row "
      >
        {trending.map((trending: Movie) => (
          <SwiperSlide
            key={trending.id}
            className="h-full  w-full flex flex-col hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:rounded-xl hover:scale-105 duration-500 cursor-pointer"
            onClick={() => searchForId(trending.id, "tv")}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${trending.poster_path}`}
              alt="imgaen"
              className="w-full h-full rounded-lg "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
