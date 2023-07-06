import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tvMovieReducer from "./features/allTvAndMovies";
import detailReducer from "./features/detail";
import seriesReducer from "./features/series";
import moviesReducer from "./features/movies";
import routing from "./features/routing";
import oneInfoReducer from "./features/OneInfo";
import favoriteReducer from "./features/favorites";
//configuracion del persist
const favoritePersistConfig = {
  key: "favorites",
  storage: storage,
};
//aplicarlo al reducer correspondiente
const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);
//configuracion del store
export const store = configureStore({
  reducer: {
    allTvAndMovies: tvMovieReducer,
    detail: detailReducer,
    series: seriesReducer,
    movies: moviesReducer,
    oneInfo: oneInfoReducer,
    favorites: persistedFavoriteReducer,
    routing,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
