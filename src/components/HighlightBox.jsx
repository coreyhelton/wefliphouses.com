import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';

const HighlightBox = ({ text }) => {
  return <Container>{text}</Container>;
};

HighlightBox.propTypes = {
  text: PropTypes.string.isRequired,
};

const Container = styled.div`
  background-color: ${colors.accent2};
  color: ${colors.white};
  padding: 0.5rem;
  border: 2px ${colors.primary} solid;
  border-radius: 2px;
  font-family: 'Oswald', sans-serif;
`;

export default HighlightBox;

// Usage:
// For short messages or alerts
