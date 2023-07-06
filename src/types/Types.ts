export interface MovieCast {
  id: number;
  character: string;
  gender: number;
  name: string;
  order: number;
  known_for_department: string;
  popularity: number;
  profile_path: string;
}

export interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  media_type: string;
  backdrop_path: string;
  original_name: string;
  first_air_date: string;
  name: string;
  cast: MovieCast[];
  type: string;
  key: string;
}
export interface Detalle {
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  original_name: string;
  first_air_date: string;
  name: string;
}
export interface OnTheatresProps {
  searchForId: (id: number, media_type: string) => void;
}
