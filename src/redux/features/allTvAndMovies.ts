import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Types";
//interfaz
export interface Movies {
  allTvAndMovies: {
    allTrending: {
      results: Array<Movie>;
    };
    popularMovies: {
      results: Array<Movie>;
    };
    popularSeries: {
      results: Array<Movie>;
    };
  };
}
//definimos el estado inicial
const initialState: Movies = {
  allTvAndMovies: {
    allTrending: {
      results: [],
    },
    popularMovies: {
      results: [],
    },
    popularSeries: {
      results: [],
    },
  },
};

const movieSlice = createSlice({
  name: "allTvAndMovies",
  initialState,
  reducers: {
    fetchMovies: (state, action) => {
      state.allTvAndMovies = action.payload;
    },
  },
});
export const { fetchMovies } = movieSlice.actions;
export default movieSlice.reducer;
