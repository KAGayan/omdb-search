import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { searchReducer } from './search';

export const reducers = combineReducers({
  Movies: moviesReducer,
  SearchOptions: searchReducer,
});

export type RootState = ReturnType<typeof reducers>;
