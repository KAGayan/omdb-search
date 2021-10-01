import { SearchOptionsModel } from 'api/models';
import { ActionTypes } from 'state/action-typs';
import { searchOptionsAction } from 'state/actions';

interface SearchState {
  loading: boolean;
  data: SearchOptionsModel | null;
}

const initialSearchState: SearchState = {
  loading: false,
  data: null,
};

export const searchReducer = (
  state = initialSearchState,
  action: searchOptionsAction,
): SearchState => {
  switch (action.type) {
    case ActionTypes.SEARCH_TOPTIONS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, ...action.payoad },
      };
    default:
      return state;
  }
};
