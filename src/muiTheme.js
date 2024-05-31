import { createTheme } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600, 
    md: 1022, 
    lg: 1400, 
    xl: 1736
  }
}

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
  breakpoints: breakpoints,
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
          '&.header-card': {
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: 1
          }
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
          letterSpacing: 0,
          lineHeight: 1.2,
          fontWeight: 300
        },
        body2: {
          fontFamily: "'Prompt', sans-serif",
          letterSpacing: 0,
          lineHeight: 1.2,
          fontWeight: 300
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
      MuiTableCell: {
        styleOverrides: {
          root: {
              fontSize: 15,
              fontWeight: 300,
              fontFamily: "'Poppins', sans-serif",
          },
        },
      }
    },
})