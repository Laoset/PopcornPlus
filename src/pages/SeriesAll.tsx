import OntheAir from "../components/seriesComponents/OntheAir";
import Trending from "../components/seriesComponents/Trending";
import TopRated from "../components/seriesComponents/TopRated";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../types/Types";
import { Autoplay } from "swiper";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { changeRoute, getAllSeries, getDetalle } from "../service/Fetching";

const SeriesAll = () => {
  const dispatch = useAppDispatch();
  const { series } = useAppSelector((state) => state);
  const allTypesSeries = series?.series;
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  useEffect(() => {
    dispatch(getAllSeries());
  }, []);
  return (
    <div className="lg:p-4  flex flex-col gap-6  lg:w-[94vw]">
      <div className="">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          className="h-[80vh] flex flex-row rounded-xl"
          modules={[Autoplay]}
        >
          {allTypesSeries?.popularSeries.results.map((seriePopular: Movie) => (
            <>
              {seriePopular.backdrop_path && seriePopular.overview ? (
                <SwiperSlide
                  key={seriePopular.id}
                  className="w-full flex flex-col bg-[#10121a] border-4 border-transparent hover:border-4 hover:border-[#f9f9f9cc] duration-500 cursor-pointer hover:rounded-xl"
                  onClick={() =>
                    searchForId(seriePopular.id, seriePopular.media_type)
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${seriePopular.backdrop_path}`}
                    alt="imgaen"
                    className="w-full h-full rounded-lg opacity-60 "
                  />
                  <div className="absolute text-white font-bold w-[40rem] mt-32 ml-14 h-[35rem] flex flex-col justify-evenly">
                    <p className="font-black text-7xl text-[#FAF9F6]">
                      {seriePopular.original_title || seriePopular.name}
                    </p>
                    <div className="flex flex-row gap-4 font-bold ">
                      <p className="text-lg">
                        {seriePopular.release_date?.split("-")[0] ||
                          seriePopular.first_air_date?.split("-")[0]}
                      </p>
                    </div>
                    <p className="text-[17px] text-gray-300">
                      {seriePopular.overview}
                    </p>
                  </div>
                </SwiperSlide>
              ) : null}
            </>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl text-[#f9f9f9]">Trending</h1>
        <Trending searchForId={searchForId} />
        <h1 className="font-bold text-4xl text-[#f9f9f9]">Top rated</h1>
        <TopRated searchForId={searchForId} />
        <h1 className="font-bold text-4xl text-[#f9f9f9]">On the air</h1>
        <OntheAir searchForId={searchForId} />
      </div>
    </div>
  );
};

export default SeriesAll;
