import { useAppSelector } from "../../redux/hooks";
import { Movie } from "../../types/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { OnTheatresProps } from "../../types/Types";

const Upcoming: React.FC<OnTheatresProps> = ({ searchForId }) => {
  const { movies } = useAppSelector((state) => state);
  const upcoming = movies.movies.upcomingMovies.results;
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
        className="h-[28rem] w-[110rem] flex flex-row p-4 "
      >
        {upcoming.map((upcoming: Movie) => (
          <SwiperSlide
            key={upcoming.id}
            className="h-96 w-72 flex flex-col hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:rounded-xl hover:scale-105 duration-500 cursor-pointer"
            onClick={() => searchForId(upcoming.id, "movie")}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${upcoming.poster_path}`}
              alt="imgaen"
              className="w-full h-full rounded-lg  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Upcoming;