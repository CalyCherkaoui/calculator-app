import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <>
    <div className="displayer">
      {result.total}
    </div>
  </>
);

Display.defaultProps = { total: '0' };
Display.propTypes = PropTypes.string.isRequired;

export default Display;
