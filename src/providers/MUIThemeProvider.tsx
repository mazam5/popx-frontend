import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f8f9',
    },
  },
  typography: {
    fontFamily: 'Rubik, Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Rubik, Roboto, sans-serif',
          userSelect: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        fullWidth: {
          width: '100%',
        },
        containedPrimary: {
          backgroundColor: '#6c25ff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6c05ff',
          },
        },
        containedSecondary: {
          backgroundColor: '#cebafb',
          color: 'black',
          '&:hover': {
            backgroundColor: '#b8a8f8',
          },
        },
        root: {
          textTransform: 'none',
          borderRadius: '10px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIThemeProvider;
