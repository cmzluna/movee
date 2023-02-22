type Cast = {
  id: Int!;
  character: String;
  credit_id: String;
  release_date: String;
  vote_count: Int;
  video: Boolean;
  adult: Boolean;
  vote_average: Int;
  title: String;
  genre_ids: [Int!]!;
  original_language: String;
  original_title: String;
  popularity: Int;
  backdrop_path: String;
  overview: String;
  poster_path: String;
};

type Crew = {
  id: Int!;
  department: String;
  original_language: String;
  original_title: String;
  job: String;
  overview: String;
  vote_count: Int;
  video: Boolean;
  poster_path: String;
  backdrop_path: String;
  title: String;
  popularity: Int;
  genre_ids: [Int!]!;
  vote_average: Int;
  adult: Boolean;
  release_date: String;
  credit_id: String;
};

type Credits = {
  id: Int!;
  cast: [Cast!]!;
  crew: [Crew!]!;
};

type Genre = {
  id: number;
  name: string;
};
export interface Movie {
  id: string;
  original_title: string;
  original_language: string;
  poster_path: string;
  release_date: string;
  overview?: string;
  credits?: Credits;
  genres: [Genre!]!;
  vote_average: number;
  genres: Genre[]!;
}

export interface User {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  username: string;
}

export interface State {
  user: null | User;
  favorites: null | Movie[];
}
