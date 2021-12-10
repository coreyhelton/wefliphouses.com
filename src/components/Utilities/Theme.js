import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e2f1f8',
      main: '#b0bec5',
      dark: '#e2f1f8',
      contrastText: '#000',
    },
  },
});

export default theme;
