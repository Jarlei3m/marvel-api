import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

// create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#e62429',
      dark: '#801215',
    },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#3D3C42',
      paper: '#e62429',
    },
    text: {
      primary: colors.common.white,
      secondary: '#a8a8b3',
    },
  },
});
export default theme;
