import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeRoute, getDetalle } from "../service/Fetching";
const Findings = () => {
  const { detail } = useAppSelector((state) => state);
  const detallitos = detail.detail.results;
  const dispatch = useAppDispatch();

  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  return (
    <div className="p-6 relative flex">
      <div className="flex flex-col gap-6">
        <div className="h-[40rem] w-[110rem] flex flex-row justify-center flex-wrap gap-6 pt-12">
          {detallitos?.map((serie) => (
            <>
              {serie.poster_path ? (
                <div
                  key={serie.id}
                  className="h-72 w-72 hover:border-solid hover:border-4 hover:border-gray-200 hover:scale-105 duration-500 cursor-pointer"
                  onClick={() =>
                    searchForId(serie.id, serie.original_title ? "movie" : "tv")
                  }
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w780${serie.poster_path}`}
                    alt="imagensitoSerie"
                    className="rounded-sm w-full h-full"
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

export default Findings;
