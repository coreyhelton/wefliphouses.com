import React from 'react';
import styled from 'styled-components';
import color from './colors';

const Tagline = function Tagline() {
  return <Container>We&apos;ll buy your house for CASH!</Container>;
};

export default Tagline;

const Container = styled.div`
  color: ${color.black};
`;
