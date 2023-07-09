import { useAppSelector } from "../../redux/hooks";
import { MovieCast } from "../../types/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Cast = () => {
  const { oneInfo } = useAppSelector((state) => state);
  const cast = oneInfo?.cast?.cast;
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        direction={"horizontal"}
        breakpoints={{
          1280: {
            slidesPerView: 9,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="lg:h-[22rem] w-[90vw] h-[15rem] xl:w-full flex flex-row pl-3 pr-3 lg:p-2"
      >
        {cast.map((cast: MovieCast) => (
          <>
            {cast.profile_path ? (
              <SwiperSlide
                key={`${cast.id}`}
                className="w-full h-48 flex flex-col text-center"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  alt="ed"
                  className="w-full h-full rounded-t-lg"
                />
                <div className="absolute text-white font-bold mt-48 w-full h-auto opacity bg-[#000000] ">
                  <p className="font-black text-sm text-[#FAF9F6]">
                    {cast.name}
                  </p>
                </div>
              </SwiperSlide>
            ) : null}
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Cast;
