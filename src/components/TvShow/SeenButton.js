import React, { PropTypes } from 'react'
import classNames from 'classnames'

const SeenButton = ({onClick, isFetching}) => (
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

SeenButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

SeenButton.defaultProps = {
  isFetching: false,
}

export default SeenButton