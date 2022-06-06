import { createTheme } from '@mui/material/styles';

export const muiTheme =  createTheme({
  palette: {
    primary: {
      main: '#5EBFB5',
    },
    secondary: {
      light: '#5EBFB5',
      main: '#5EBFB5',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#5EBFB5',
    },
    tonalOffset: 0.2,
  },
    typography: {
        h1: {
            fontSize: 28,
            fontWeight: 900,
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            '&.header': {
              color: "white",
              fontSize: 35, 
              letterSpacing: 1 
            }
        },
        h5: {
            fontSize: 16,
            fontWeight: 300,
            fontFamily: "'Prompt', sans-serif",
            '&.sub-header': {
              color: "white",
              fontStyle: "italic", 
              marginTop: "0px"
            }
        }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "'Prompt', sans-serif",
              borderWidth: "2px !important"
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
              fontSize: 16,
              fontWeight: 300,
              fontFamily: "'Prompt', sans-serif",
              letterSpacing: 1,
              color: "white",
          },
        },
      },
    },
})