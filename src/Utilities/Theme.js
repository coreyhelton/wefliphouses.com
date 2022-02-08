import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    type: 'light',
    primary: {
      main: '#435e73',
    },
    secondary: {
      main: '#ea7f00',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    heroText: {
      fontWeight: '700',
      fontSize: '2.3rem',
      fontFamily: 'Rubik',
    },
  },
});

export default theme;
