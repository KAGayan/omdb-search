import { getMovieDetail } from 'api';
import { Button, Card } from 'components/ui';
import { memo, useState } from 'react';
import { MovieDetailModel } from 'api/models';
interface Props {
  imdbID: string;
  title: string;
  poster?: string;
  year: string;
}

const MovieCard = ({ imdbID, title, poster, year }: Props) => {
  const [details, setDetails] = useState<MovieDetailModel>();

  const getDetails = async (imdbID: string) => {
    const response = await getMovieDetail(imdbID);

    setDetails(response);
  };

  return (
    <Card expand={details !== undefined}>
      {poster !== 'N/A' ? (
        <div
          className="image-box"
          style={{
            backgroundImage: `url('${poster}')`,
          }}
        />
      ) : (
        <></>
      )}
      <div className="info">
        <div className="details-box">
          <p>{title}</p>
          {details && (
            <div className="details">
              <div>
                <span>Plot</span>
                <p>{details?.Plot}</p>
              </div>
              <div>
                <span>Actors</span>
                <p>{details?.Actors}</p>
              </div>
              <div>
                <span>Ratings</span>
                {details?.Ratings.map((rating) => {
                  return (
                    <div key={`${imdbID}-${rating?.Value}`}>
                      <p>
                        - {rating?.Source}: {rating?.Value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="footer">
          <div className="year">
            <p>{year}</p>
          </div>
          <div className="button">
            {!details && (
              <Button
                label="DETAILS"
                onClick={() => {
                  getDetails(imdbID);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

const areEqual = (prevProps: Props, nextProps: Props) =>
  prevProps.imdbID === nextProps.imdbID;

export default memo(MovieCard, areEqual);
