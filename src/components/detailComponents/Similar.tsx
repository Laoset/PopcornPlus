import { SwiperSlide, Swiper } from "swiper/react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { Movie } from "../../types/Types";
import { changeRoute, getDetalle } from "../../service/Fetching";

const Similar = () => {
  const dispatch = useAppDispatch();
  const { oneInfo } = useAppSelector((state) => state);
  const similarInfo = oneInfo.similars.results;
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
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
          500: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="w-[87vw] h-[22rem] xl:w-full flex flex-row pl-3 pr-3 lg:p-2"
      >
        {similarInfo.map((similar: Movie) => (
          <>
            {similar.poster_path ? (
              <SwiperSlide
                key={similar.id}
                className="h-80 w-full flex flex-col hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:rounded-xl hover:scale-105 duration-500 cursor-pointer"
                onClick={() =>
                  searchForId(
                    similar.id,
                    similar.original_title ? "movie" : "tv"
                  )
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
                  alt="imgaen"
                  className="w-full h-full rounded-lg  "
                />
              </SwiperSlide>
            ) : null}
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Similar;
