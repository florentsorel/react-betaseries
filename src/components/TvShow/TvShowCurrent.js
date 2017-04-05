import React, {
  PropTypes
} from 'react'
import Progress from './Progress'
import Remaining from './Remaining';
import SeenButton from './SeenButton';
import Spinner from "../Spinner";

const TvShowCurrent = ({
  id,
  title,
  image,
  percentage,
  remaining,
  last,
  onMarkAsSeen,
  isFetching
}) => (
  <div className="tv-show">
    <div className="tv-show-header">
      <SeenButton onClick={onMarkAsSeen} isFetching={isFetching}/>
    </div>
    <div className="tv-show-image">
      {isFetching ? <Spinner className="is-tv-show"/> : null}
      {image !== null ? <img src={image} alt={title} width="155"/> : 'Aucune image'}
      <Progress value={percentage}/>
    </div>
    <div className="tv-show-details">
      <div className="tv-show-details-current">
        {last} <Remaining value={remaining}/>
      </div>
      <div className="tv-show-details-title">{title}</div>

    </div>

  </div>
)

TvShowCurrent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  last: PropTypes.string.isRequired,
  onMarkAsSeen: PropTypes.func.isRequired,
}

export default TvShowCurrent