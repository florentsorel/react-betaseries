import React, { PropTypes }  from 'react';

const Spinner = ({className}) => (
  <div className={`spinner-container ${className}`}>
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  </div>
)

Spinner.propTypes = {
  className: PropTypes.string,
}

export default Spinner;