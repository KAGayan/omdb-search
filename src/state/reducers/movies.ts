import { MovieSearchModel } from 'api/models';
import { ActionTypes } from 'state/action-typs';
import { searchMoviesAction } from 'state/actions';

interface MovieState {
  loading: boolean;
  data: MovieSearchModel | null;
}

const initialMoviesState: MovieState = {
  loading: false,
  data: null,
};

export const moviesReducer = (
  state = initialMoviesState,
  action: searchMoviesAction,
): MovieState => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIES:
      return {
        ...state,
        loading: false,
        data: action.payoad.movies,
      };
    default:
      return state;
  }
};
