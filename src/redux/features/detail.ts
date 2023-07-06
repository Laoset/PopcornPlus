import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Types";
//interfaz
export interface Movies {
  detail: {
    results: Array<Movie>;
  };
}
//definimos el estado inicial
const initialState: Movies = {
  detail: {
    results: [],
  },
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});
export const { getDetail } = detailSlice.actions;
export default detailSlice.reducer;
