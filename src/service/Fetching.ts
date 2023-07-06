import { Dispatch } from "redux";
export const apiKey = "4cb76c0be98f3e44306316694f243bcb";
export const basiUrl = "https://api.themoviedb.org/3";
import { fetchMovies } from "../redux/features/allTvAndMovies";
import { getDetail } from "../redux/features/detail";
import { routeDetail } from "../redux/features/routing";
import { fetchSeries } from "../redux/features/series";
import { fetchOnlyMovies } from "../redux/features/movies";
import {
  getOneMovie,
  getOneTvSerie,
  getCast,
  getSimilar,
  getVideos,
} from "../redux/features/OneInfo";
export const getPopularMovies = () => {
  return async (dispatch: any) => {
    const response = await fetch(`${basiUrl}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    const response2 = await fetch(
      `${basiUrl}/trending/all/week?api_key=${apiKey}`
    );
    const data2 = await response2.json();
    const response3 = await fetch(`${basiUrl}/tv/popular?api_key=${apiKey}`);
    const data3 = await response3.json();
    const moviesData = {
      popularMovies: data,
      allTrending: data2,
      popularSeries: data3,
    };
    dispatch(fetchMovies(moviesData));
  };
};
export const getOneResult = (text: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      `${basiUrl}/search/multi?query=${text}&include_adult=false&language=en-US&page=1?&api_key=${apiKey}`
    );
    const datita = await response.json();
    dispatch(getDetail(datita));
  };
};
export const changeRoute = (text: string) => {
  return (dispatch: any) => {
    dispatch(routeDetail(text));
  };
};
//detail
export const getDetalle = (id: number, media_type: string) => {
  return async (dispatch: Dispatch) => {
    if (media_type === "movie") {
      const responseMovie = await fetch(
        `${basiUrl}/movie/${id}?api_key=${apiKey}`
      );
      const dataMovie = await responseMovie.json();
      //CREDITOS
      const response2 = await fetch(
        `${basiUrl}/movie/${id}/credits?api_key=${apiKey}`
      );
      const data2 = await response2.json();
      //SIMILARES
      const responseSimilarMovie = await fetch(
        `${basiUrl}/movie/${id}/similar?api_key=${apiKey}`
      );
      const dataSimilarMovie = await responseSimilarMovie.json();
      //TRAILERS
      const responseVideosMovie = await fetch(
        `${basiUrl}/movie/${id}/videos?api_key=${apiKey}`
      );
      const dataVideosMovie = await responseVideosMovie.json();

      if (dataMovie) {
        dispatch(getOneMovie(dataMovie));
        dispatch(getCast(data2));
        dispatch(getSimilar(dataSimilarMovie));
        dispatch(getVideos(dataVideosMovie));
      }
    } else {
      const responseTV = await fetch(`${basiUrl}/tv/${id}?api_key=${apiKey}`);
      const dataTV = await responseTV.json();
      //CREDITOS
      const response3 = await fetch(
        `${basiUrl}/tv/${id}/credits?api_key=${apiKey}`
      );
      const data3 = await response3.json();
      //SIMILAR
      const responseSimilarTv = await fetch(
        `${basiUrl}/tv/${id}/similar?api_key=${apiKey}`
      );
      const dataSimilarTv = await responseSimilarTv.json();
      //TRAILERS
      const responseVideoTv = await fetch(
        `${basiUrl}/tv/${id}/videos?api_key=${apiKey}`
      );
      const dataVideosTv = await responseVideoTv.json();

      if (dataTV) {
        dispatch(getOneTvSerie(dataTV));
        dispatch(getCast(data3));
        dispatch(getSimilar(dataSimilarTv));
        dispatch(getVideos(dataVideosTv));
        return;
      }
    }
  };
};
export const getCastFrom = (id: number, media_type: string) => {
  return async (dispatch: Dispatch) => {
    if (media_type === "movie") {
      const responseMovie = await fetch(
        `${basiUrl}/movie/${id}?api_key=${apiKey}`
      );
      const dataMovie = await responseMovie.json();
      if (dataMovie) {
        dispatch(getOneMovie(dataMovie));
      }
    } else {
      const responseTV = await fetch(`${basiUrl}/tv/${id}?api_key=${apiKey}`);
      const dataTV = await responseTV.json();
      if (dataTV) {
        dispatch(getOneTvSerie(dataTV));
        return;
      }
    }
  };
};

//series!
export const getAllSeries = () => {
  return async (dispatch: any) => {
    const response = await fetch(`${basiUrl}/tv/on_the_air?api_key=${apiKey}`);
    const data = await response.json();
    const response2 = await fetch(`${basiUrl}/tv/top_rated?api_key=${apiKey}`);
    const data2 = await response2.json();
    const response3 = await fetch(
      `${basiUrl}/trending/tv/week?api_key=${apiKey}`
    );
    const data3 = await response3.json();
    const response4 = await fetch(`${basiUrl}/tv/popular?api_key=${apiKey}`);
    const data4 = await response4.json();
    const allSeriesTypes = {
      onTheAirSeries: data,
      topRatedSeries: data2,
      trendingSeries: data3,
      popularSeries: data4,
    };
    dispatch(fetchSeries(allSeriesTypes));
  };
};
//movies!
export const getAllMovies = () => {
  return async (dispatch: any) => {
    const response = await fetch(
      `${basiUrl}/movie/now_playing?api_key=${apiKey}`
    );
    const data = await response.json();
    const response2 = await fetch(
      `${basiUrl}/movie/top_rated?api_key=${apiKey}`
    );
    const data2 = await response2.json();
    const response3 = await fetch(
      `${basiUrl}/movie/upcoming?api_key=${apiKey}`
    );
    const data3 = await response3.json();
    const response4 = await fetch(`${basiUrl}/movie/popular?api_key=${apiKey}`);
    const data4 = await response4.json();
    const allMoviesTypes = {
      onTheatresMovies: data,
      topRatedMovies: data2,
      upcomingMovies: data3,
      popularMovies: data4,
    };
    dispatch(fetchOnlyMovies(allMoviesTypes));
  };
};
