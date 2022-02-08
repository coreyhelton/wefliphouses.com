import { Typography, Box, ThemeProvider } from '@mui/material';
import React from 'react';
import ContactForm from '../Contact';
import bwOldHouseImg from '../../assets/images/bw-old-house.jpg';
import theme from '../../Utilities/Theme';

const Lander = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${bwOldHouseImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100vw',
          height: '425px',
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column wrap',
            gap: '20px',
            margin: '20px',
            marginTop: '100px',
          }}
        >
          <Typography variant="heroText" color="white">
            Sell your house.
          </Typography>
          <Typography variant="heroText" color="white">
            Get cash fast.
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </ThemeProvider>
  );
};

export default Lander;
