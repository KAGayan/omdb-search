import { MovieSearchModel, MovieDetailModel } from './models';
import { appSettings } from 'config';

const request = async <TResponse>(url: string) => {
  const response = await fetch(
    `${appSettings.API_URL}?apikey=${appSettings.API_KEY}&${url}`,
  );
  const data = await response.json();
  return data as TResponse;
};

export const searchMovies = async (search: string, page: number) => {
  const response = await request<MovieSearchModel>(
    `type=movie&page=${page}&s=${search}`,
  );

  return response;
};

export const getMovieDetail = async (imdbID: string) => {
  const response = await request<MovieDetailModel>(`i=${imdbID}`);

  return response;
};
