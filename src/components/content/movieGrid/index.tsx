import { MovieModel, SearchOptionsModel } from 'api/models';
import MovieCard from './movieCard';
import { useActions, useTypedSelector } from 'state';
import { Pagination } from 'components/ui';
import { appSettings } from 'config';
import './index.scss';

interface Props {
  movies: MovieModel[];
  totalResults: string;
}

const MovieGrid = ({ movies, totalResults }: Props) => {
  const SearchOptions = useTypedSelector((state) => state.SearchOptions.data);
  const { searchOmdb } = useActions();

  const handlePageClick = (
    selectedPage: number,
    SearchOptions: SearchOptionsModel,
  ) => {
    searchOmdb(SearchOptions.title, selectedPage);
  };

  return (
    <>
      <div className="grid">
        {movies.map((movie) => {
          return (
            <MovieCard
              // Fix duplicate key issue when movies duplicated
              key={`${movie.imdbID}-${Math.floor(
                Math.random() * appSettings.PAGINATION_ITEMS_PER_PAGE,
              )}`}
              imdbID={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
            />
          );
        })}
      </div>
      <p className="total-results">{totalResults} Movies found</p>
      <Pagination
        pageCount={Math.ceil(
          parseInt(totalResults) / appSettings.PAGINATION_ITEMS_PER_PAGE,
        )}
        onPageChange={(selectedPage) => {
          SearchOptions && handlePageClick(selectedPage, SearchOptions);
        }}
      />
    </>
  );
};

export default MovieGrid;
