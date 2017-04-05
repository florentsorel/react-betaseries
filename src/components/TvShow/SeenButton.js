import React, { PropTypes } from 'react'
import classNames from 'classnames'

const SeenButton = ({onClick, isFetching, isFinished}) => {
  if (isFinished === true) return null

  return (
    <button
      type="button"
      className={classNames({
        'tv-show-header-button': true,
        'is-fetching': isFetching
      })}
      title="Marqué comme vu"
      onClick={onClick}>
      <i className="fa fa-eye"></i>
    </button>
  )
}

SeenButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

SeenButton.defaultProps = {
  isFetching: false,
  isFinished: false,
}

export default SeenButton