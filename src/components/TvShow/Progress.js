import React from 'react'
import classNames from 'classnames'

const Progress = (props) => {
  const percentage = props.value + '%';
  return (
    <div className={classNames({
      'progress': true,
      'has-started': props.value !== 0
    })}>
      <div className="progress-value" style={{width: percentage}}></div>
    </div>
  )
}

export default Progress