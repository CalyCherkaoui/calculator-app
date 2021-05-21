import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (
  <>
    <button className="btn" onClick={() => { clickHandler(name); }} type="button">
      { name }
    </button>
  </>
);

Button.propTypes = { name: PropTypes.string.isRequired, clickHandler: PropTypes.func.isRequired };

export default Button;
