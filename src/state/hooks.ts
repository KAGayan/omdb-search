import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchOmdb, setSearchOptions } from './action-creators';
import { RootState } from './reducers';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ searchOmdb, setSearchOptions }, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
