import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Types";
export interface Series {
  series: {
    onTheAirSeries: {
      results: Array<Movie>;
    };
    topRatedSeries: {
      results: Array<Movie>;
    };
    trendingSeries: {
      results: Array<Movie>;
    };
    popularSeries: {
      results: Array<Movie>;
    };
  };
}
const initialState = {
  series: {
    onTheAirSeries: {
      results: [],
    },
    topRatedSeries: {
      results: [],
    },
    trendingSeries: {
      results: [],
    },
    popularSeries: {
      results: [],
    },
  },
};

const seriesSlicer = createSlice({
  name: "series",
  initialState,
  reducers: {
    fetchSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});
export const { fetchSeries } = seriesSlicer.actions;
export default seriesSlicer.reducer;
