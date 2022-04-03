import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#243b55'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
    truncate: (width) => ({
      width,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    })
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Public Sans', sans-serif",
          textTransform: 'capitalize'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Public Sans', sans-serif"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Public Sans', sans-serif"
        }
      }
    }
  }
});

export default theme;
