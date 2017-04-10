import React, { PropTypes } from 'react'
import classNames from 'classnames'

const UnarchiveButton = ({onClick, isFetching}) => {

  return (
    <button
      type="button"
      className={classNames({
        'tv-show-header-button': true,
        'is-fetching': isFetching
      })}
      title="Sortir la série des archives"
      onClick={onClick}>
      <i className="fa fa-archive"></i>
    </button>
  )
}

UnarchiveButton.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

UnarchiveButton.defaultProps = {
  isFetching: false,
}

export default UnarchiveButton