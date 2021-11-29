import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
// import Tagline from './Tagline';
import Menu from './Menu';
import colors from './colors';
import Logo from './logo';

const Header = () => {
  const iconColor = useMemo(() => ({ color: '#fefefe' }));

  return (
    <IconContext.Provider value={iconColor}>
      <HeaderStyle>
        <Logo />
        {/* <Tagline /> */}
        <p>WeFlipHouses.com</p>
        <Menu />
      </HeaderStyle>
    </IconContext.Provider>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4em;
  color: ${colors.white};
  font-family: 'Oswald', sans-serif;
`;

export default Header;
