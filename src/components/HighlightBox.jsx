import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HighlightBox = ({ text }) => {
  return <Container>{text}</Container>;
};

HighlightBox.propTypes = {
  text: PropTypes.string.isRequired,
};

const Container = styled.div`
  background-color: primary;
  color: white;
  padding: 0.5rem;
  border: 2px primary solid;
  border-radius: 2px;
  font-family: 'Oswald', sans-serif;
`;

export default HighlightBox;

// Usage:
// For short messages or alerts
