import { Search } from './search';
import './index.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          <h1>OMDB Search</h1>
        </div>
        <div className="search-box">
          <span>Search a movie</span>
          <Search />
        </div>
      </div>
    </div>
  );
};
