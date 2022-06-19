import { createTheme } from '@mui/material/styles';

export const muiTheme =  createTheme({
  palette: {
    primary: {
      main: '#5EBFB5',
    },
    secondary: {
      light: '#5EBFB5',
      main: '#5EBFB5',
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
            '&.title': {
              fontSize: 30, 
              letterSpacing: 1
            }
        },
        h3: {
          fontSize: 26,
          fontWeight: 900,
          fontFamily: "'Poppins', sans-serif",
          '&.sub-title': {
            fontSize: 28, 
            letterSpacing: 1 
          }
        },
        h4: {
          fontSize: 18,
          fontWeight: 400,
          fontFamily: "'Prompt', sans-serif",
        },
        h5: {
            fontSize: 16,
            fontWeight: 300,
            fontFamily: "'Prompt', sans-serif",
            '&.menu-header': {
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1
            }
        },
        body1: {
          fontSize: 17,
          fontFamily: "'Prompt', sans-serif",
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