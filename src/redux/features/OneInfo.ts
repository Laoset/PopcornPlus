import { createSlice } from "@reduxjs/toolkit";
import { Movie, MovieCast } from "../../types/Types";
//interfaz
export interface Movies {
  oneInfo: Movie;
  cast: {
    cast: Array<MovieCast>;
  };
  similars: {
    results: Array<Movie>;
  };
  video: {
    results: Array<Movie>;
  };
}
//definimos el estado inicial
const initialState: Movies = {
  oneInfo: {
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    release_date: "",
    poster_path: "",
    media_type: "",
    backdrop_path: "",
    original_name: "",
    first_air_date: "",
    name: "",
    cast: [],
    type: "",
    key: "",
  },
  cast: {
    cast: [],
  },
  similars: {
    results: [],
  },
  video: {
    results: [],
  },
};

const oneInfoSlice = createSlice({
  name: "oneInfo",
  initialState,
  reducers: {
    getOneMovie: (state, action) => {
      state.oneInfo = action.payload;
    },
    getOneTvSerie: (state, action) => {
      state.oneInfo = action.payload;
    },
    getCast: (state, action) => {
      state.cast = action.payload;
    },
    getSimilar: (state, action) => {
      state.similars = action.payload;
    },
    getVideos: (state, action) => {
      state.video = action.payload;
    },
  },
});
export const { getOneMovie, getOneTvSerie, getCast, getSimilar, getVideos } =
  oneInfoSlice.actions;
export default oneInfoSlice.reducer;
