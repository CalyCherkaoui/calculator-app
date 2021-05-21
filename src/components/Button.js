import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, clickHandler }) => {
  const handleClick = () => {clickHandler(btnName)};

  return (
    <button type="button" className="btn" onClick={handleClick}>
      {btnName}
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
