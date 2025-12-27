import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f7f8f9',
    },
    primary: {
      main: '#6C25FF',
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
          color: '#1D2226',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        fullWidth: {
          width: '100%',
        },
        containedPrimary: {
          backgroundColor: '#6C25FF',
          '&:hover': {
            backgroundColor: '#6C25FF',
          },
        },
        containedSecondary: {
          backgroundColor: '#6C25FF4B',
          color: '#1D2226',
          '&:hover': {
            backgroundColor: '#6C25FF4b',
          },
        },
        root: {
          textTransform: 'none',
          borderRadius: '6px',
          fontSize: '16px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '40px',
          borderRadius: '6px',
          backgroundColor: '#fff',
        },
        input: {
          padding: '10px 14px',
          boxSizing: 'border-box',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          minHeight: '49px',

          '& .MuiOutlinedInput-root fieldset': {
            borderColor: '#CBCBCB',
          },

          '& .MuiOutlinedInput-root:hover fieldset': {
            borderColor: '#6C25FF',
          },

          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            borderColor: '#6C25FF',
          },

          '& .MuiOutlinedInput-root.Mui-error fieldset': {
            borderColor: '#d32f2f',
          },

          '& .MuiInputLabel-root': {
            color: '#6C25FF',

            '&.Mui-focused': {
              color: '#6C25FF',
            },

            '&.Mui-error': {
              color: '#d32f2f',
            },
          },
        },
      },
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-asterisk': {
            color: '#d32f2f',
          },
          '&.Mui-focused': {
            color: 'black',
          },
          fontSize: '18px',
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
