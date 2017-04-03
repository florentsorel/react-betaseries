import React, {
  PropTypes
} from 'react'
import TvShow from './TvShow'
import FilterTvShows from './FilterTvShows';
import Spinner from "./Spinner";

const TvShows = ({
  filter,
  shows,
  isFetching
}) => {
  return (
    <div>
      <FilterTvShows filter={filter}/>
      <div className="content">
        {isFetching ? <Spinner /> : null}
        {shows.map(show =>
          <TvShow
            key={show.id}
            id={show.id}
            title={show.title}
            image={show.images.poster}
            percentage={Number(show.user.status)}
            remaining={Number(show.user.remaining)}
            last={show.user.last}
          />
        )}
      </div>
    </div>
  )
};

TvShows.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        poster: PropTypes.string
      }),
      user: PropTypes.shape({
        status: PropTypes.string.isRequired,
        remaining: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      })
    })
  ).isRequired
}

export default TvShows