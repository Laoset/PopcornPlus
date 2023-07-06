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
        slidesPerView={9}
        spaceBetween={20}
        className="h-[16rem] w-[110rem] flex flex-row p-4 "
      >
        {cast.map((cast: MovieCast) => (
          <>
            {cast.profile_path ? (
              <SwiperSlide
                key={`${cast.id}`}
                className="h-48 flex flex-col text-center "
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
