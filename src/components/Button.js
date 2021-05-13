import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <p>{ name }</p>
  );
}

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
