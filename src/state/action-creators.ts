import { ActionTypes } from './action-typs';
import { Dispatch } from 'redux';
import { searchMovies } from 'api';
import { searchMoviesAction, searchOptionsAction } from './actions';
import { SearchOptionsModel } from 'api/models';

export const searchOmdb = (search: string, page: number) => {
  return async (dispatch: Dispatch<searchMoviesAction>) => {
    const response = await searchMovies(search, page);
    dispatch({
      type: ActionTypes.SEARCH_MOVIES,
      payoad: {
        movies: response,
      },
    });
  };
};

export const setSearchOptions = ({ title }: SearchOptionsModel) => {
  return async (dispatch: Dispatch<searchOptionsAction>) => {
    dispatch({
      type: ActionTypes.SEARCH_TOPTIONS,
      payoad: {
        title,
      },
    });
  };
};
