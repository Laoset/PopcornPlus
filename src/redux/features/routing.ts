import { createSlice } from "@reduxjs/toolkit";
//interfaz
export interface Movies {
  route: string;
}
//definimos el estado inicial
const initialState: Movies = {
  route: "Home",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    routeDetail: (state, action) => {
      state.route = action.payload;
    },
  },
});
export const { routeDetail } = routeSlice.actions;
export default routeSlice.reducer;
