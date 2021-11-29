/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';

const Button = ({ type, click, label }) => {
  return (
    <ButtonStyle type={type} onClick={click}>
      {label}
    </ButtonStyle>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const ButtonStyle = styled.button`
  -webkit-border-radius: 14;
  -moz-border-radius: 14;
  border-radius: 2px;
  color: ${colors.white};
  font-size: 20px;
  background: ${colors.accent1};
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin: 1rem auto;

  &:hover {
    background: ${colors.secondary};
  }
`;

export default Button;

// TODO add colors to props
// TODO convert props to object since there are so many to pass in? Or have a single prop for the colors, like WARNING for a red button and CHILL for a blue one??
