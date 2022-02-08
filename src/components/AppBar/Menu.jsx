import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { IconContext } from 'react-icons/lib';
import { IoMenu, IoClose } from 'react-icons/io5';
import { ThemeProvider } from '@emotion/react';
import MenuItems from './MenuItems';
import theme from '../../Utilities/Theme';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const iconColor = useMemo(() => ({ color: '#fff' }));

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={iconColor}>
        <Style>
          <div href="#" className="menu-open">
            <IoMenu onClick={toggleMenu} />
          </div>
          <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <div to="#" className="menu-close">
                  <IoClose onClick={toggleMenu} />
                </div>
              </li>
              {MenuItems.map((item, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className={item.cName}>
                    <a href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Style>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default Menu;

const Style = styled.div`
  .menu-open {
    font-size: 2rem;
  }

  .menu-close {
    font-size: 2rem;
    margin-right: 16px;
  }

  .nav-menu {
    background-color: ${theme.palette.primary.main};
    width: 200px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    filter: drop-shadow(0 0 0.25rem black);
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: start;
  }

  span {
    margin-left: 16px;
  }
`;
