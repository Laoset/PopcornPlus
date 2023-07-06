import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/Types";
//interfaz
export interface Movies {
  favorites: Array<Movie>;
}
//definimos el estado inicial
const initialState: Movies = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const dato = action.payload;
      const esTv = dato.first_air_date;
      const esMovie = dato.original_title;
      //pregunto si existe
      const alredyIn = state.favorites.find(
        (objeto) =>
          objeto.id === dato.id &&
          objeto.first_air_date === esTv &&
          objeto.original_title === esMovie
      );
      //si esto es falso o undefined , entra!
      if (!alredyIn) {
        state.favorites.push(dato);
      }
    },
    deleteFavorite: (state, action) => {
      const dato = action.payload;
      const esTv = dato.first_air_date;
      const esMovie = dato.original_title;
      const encontrado = state.favorites.find(
        (objeto) =>
          objeto.id === dato.id &&
          objeto.first_air_date === esTv &&
          objeto.original_title === esMovie
      );
      if (encontrado) {
        state.favorites = state.favorites.filter(
          (objeto) => objeto.id !== dato.id
        );
      }
    },
  },
});
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
