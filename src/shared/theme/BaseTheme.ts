import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const BaseTheme = createTheme({
  palette: {
    primary: {
      main: '#6ff264'
    },
    secondary: {
      main: '#36e52a'
    },
    error: {
      main: red.A400
    }
  }

});

export { BaseTheme }