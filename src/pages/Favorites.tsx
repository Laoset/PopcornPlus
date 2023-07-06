import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeRoute, getDetalle } from "../service/Fetching";
const Favorites = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state);
  const favoritos = favorites.favorites;

  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  return (
    <div className="p-6 relative flex">
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-[3rem] text-[#f9f9f9]">Watchlist</h1>
        <h4 className="font-bold text-[1.3rem] text-[#f9f9f9]">
          My Movies & Series
        </h4>
        <div className="h-[80rem] w-[110rem] flex flex-row justify-center flex-wrap">
          {favoritos?.map((favorititos) => (
            <>
              {favorititos.poster_path ? (
                <div
                  key={favorititos.id}
                  className="h-96 w-72 hover:border-solid hover:border-4 hover:border-gray-200 hover:scale-105 duration-300 cursor-pointer m-3 hover:rounded-lg"
                  onClick={() =>
                    searchForId(
                      favorititos.id,
                      favorititos.original_title ? "movie" : "tv"
                    )
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w780${favorititos.poster_path}`}
                    alt="imagensitoSerie"
                    className="rounded-sm w-full h-full object-fill"
                  />
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
