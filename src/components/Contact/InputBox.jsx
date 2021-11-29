import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input placeholder={placeholder} type={type} />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: '',
};

export default InputBox;
