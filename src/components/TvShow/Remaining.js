import React from 'react'

const Remaining = ({value}) => {
  if (value <= 0) {
    return null
  }

  return (
    <span>
    + {value} {value === 1 ? 'épisode' : 'épisodes'}
    </span>

  )
}

export default Remaining