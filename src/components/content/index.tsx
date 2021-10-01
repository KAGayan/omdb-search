import { useTypedSelector } from 'state';
import { lazy, Suspense } from 'react';
import { Banner } from 'components/ui';
const MovieGrid = lazy(() => import('./movieGrid'));
import './index.scss';

export const Content = () => {
  const movies = useTypedSelector((state) => state.Movies.data);

  return (
    <div className="content">
      <div className="content-container">
        {movies === null ? (
          <Banner message="Welcome to OMDB Search, search something in the bar above!" />
        ) : movies?.Search?.length ? (
          <Suspense fallback={<></>}>
            <MovieGrid
              movies={movies.Search}
              totalResults={movies?.totalResults}
            />
          </Suspense>
        ) : (
          <Banner type={'error'} message={movies?.Error} />
        )}
      </div>
    </div>
  );
};
