import React from 'react';
import { GiFamilyHouse } from 'react-icons/gi';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Style>
      <GiFamilyHouse />
    </Style>
  );
};

export default Logo;

const Style = styled.div`
  font-size: 2rem;
`;
