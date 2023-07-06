import { useAppSelector } from "../../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Movie } from "../../types/Types";
import { OnTheatresProps } from "../../types/Types";

const OntheAir: React.FC<OnTheatresProps> = ({ searchForId }) => {
  const { series } = useAppSelector((state) => state);
  const ontheAir = series.series.onTheAirSeries.results;
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        direction={"horizontal"}
        slidesPerView={6}
        spaceBetween={20}
        className="h-[28rem] w-[110rem] flex flex-row p-4"
      >
        {ontheAir.map((ontheAir: Movie) => (
          <SwiperSlide
            key={ontheAir.id}
            className="h-96 w-72 flex flex-col hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:rounded-xl hover:scale-105 duration-500 cursor-pointer"
            onClick={() => searchForId(ontheAir.id, "tv")}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${ontheAir.poster_path}`}
              alt="imgaen"
              className="w-full h-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OntheAir;