export interface MovieModel {
  Title: string;
  Year: string;
  Poster?: string;
  imdbID: string;
}

export interface MovieSearchModel {
  Response: string;
  Search: MovieModel[];
  totalResults: string;
  Error: string;
}

interface Ratings {
  Source: string;
  Value: string;
}

export interface MovieDetailModel {
  Plot: string;
  Actors: string;
  Ratings: Ratings[];
}

export interface SearchOptionsModel {
  title: string;
}
