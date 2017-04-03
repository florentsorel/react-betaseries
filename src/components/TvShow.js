import React, {
    PropTypes
} from 'react'
import Progress from './Progress'
import Remaining from "./Remaining";

const TvShow = ({
  id,
  title,
  image,
  percentage,
  remaining,
  last,
}) => (
  <div className="tv-show">
    <div className="tv-show-image">
      {image !== null ? <img src={image} alt={title} width="155"/> : 'Aucune image'}
      <Progress value={percentage} />
    </div>
    <div className="tv-show-details">
      <div className="tv-show-details-current">
        {last} <Remaining value={remaining} />
      </div>
      <div className="tv-show-details-title">{title}</div>

    </div>

  </div>
)

TvShow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  percentage: PropTypes.number.isRequired,
}

export default TvShow