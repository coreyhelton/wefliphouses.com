import React, { useMemo } from 'react';
import { IconContext } from 'react-icons/lib';
// import Tagline from './Tagline';
import { Box, Typography, ThemeProvider } from '@mui/material';
import Menu from './Menu';
import Logo from '../logo';
import theme from '../../Utilities/Theme';

const AppBar = () => {
  const iconColor = useMemo(() => ({ color: '#fefefe' }));

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider value={iconColor}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: `${theme.palette.primary.main}`,
            paddingLeft: '1rem',
            paddingRight: '1rem',
            fontSize: '1rem',
            color: 'white',
            fontFamily: "'Oswald', sans-serif",
            minHeight: '8vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Logo />
            <Typography variant="h5">WeFlipHouses.com</Typography>
          </Box>
          <Menu />
        </Box>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default AppBar;
