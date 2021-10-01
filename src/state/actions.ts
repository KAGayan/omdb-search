import { MovieSearchModel, SearchOptionsModel } from 'api/models';
import { ActionTypes } from './action-typs';

export interface searchMoviesAction {
  type: ActionTypes.SEARCH_MOVIES;
  payoad: {
    movies: MovieSearchModel;
  };
}

export interface searchOptionsAction {
  type: ActionTypes.SEARCH_TOPTIONS;
  payoad: SearchOptionsModel;
}
