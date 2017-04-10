import React, {
    PropTypes
} from 'react'
import TvShowCurrent from './TvShowCurrent';
import TvShowArchived from './TvShowArchived';

const TvShow = ({
  id,
  title,
  image,
  status,
  remaining,
  last,
  isArchived,
  onMarkAsSeen,
  onUnarchive,
  isFetching
}) => {
  if (isArchived === false) {
    return (
      <TvShowCurrent
        isFetching={isFetching}
        id={id}
        title={title}
        image={image}
        percentage={status}
        remaining={remaining}
        last={last}
        onMarkAsSeen={onMarkAsSeen}
      />
    )
  }
  else {
    return (
      <TvShowArchived
        isFetching={isFetching}
        id={id}
        title={title}
        image={image}
        percentage={status}
        remaining={remaining}
        last={last}
        onUnarchive={onUnarchive}
      />
    )
  }

}

TvShow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  last: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onMarkAsSeen: PropTypes.func.isRequired,
}

export default TvShow