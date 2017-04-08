import React, {
  PropTypes
} from 'react'
import TvShow from './TvShow'
import FilterTvShows from './FilterTvShows';
import Spinner from "./Spinner";

const TvShows = ({
  filter,
  shows,
  isFetching,
  onMarkAsSeen
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
              status={Number(show.user.status)}
              remaining={Number(show.user.remaining)}
              last={show.user.last}
              isArchived={show.user.archived}
              onMarkAsSeen={() => onMarkAsSeen(show.id)}
              isFetching={show.isFetching}
            />
          )
        }
      </div>
    </div>
  )
};

TvShows.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onMarkAsSeen: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        poster: PropTypes.string
      }),
      user: PropTypes.shape({
        archived: PropTypes.bool.isRequired,
        status: PropTypes.number.isRequired,
        remaining: PropTypes.number.isRequired,
        last: PropTypes.string.isRequired,
      })
    })
  ).isRequired
}

export default TvShows