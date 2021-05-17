import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <p>{ name }</p>
);

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
