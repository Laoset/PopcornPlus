import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Types";
export interface Series {
  movies: {
    onTheatresMovies: {
      results: Array<Movie>;
    };
    topRatedMovies: {
      results: Array<Movie>;
    };
    upcomingMovies: {
      results: Array<Movie>;
    };
    popularMovies: {
      results: Array<Movie>;
    };
  };
}
const initialState = {
  movies: {
    onTheatresMovies: {
      results: [],
    },
    topRatedMovies: {
      results: [],
    },
    upcomingMovies: {
      results: [],
    },
    popularMovies: {
      results: [],
    },
  },
};

const movieSlicer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchOnlyMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { fetchOnlyMovies } = movieSlicer.actions;
export default movieSlicer.reducer;
