import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/global.css'
import { createTheme, IconButton, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import type { AppProps } from 'next/app'
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from '../lib/utils/SnackUtils';
import 'react-perfect-scrollbar/dist/css/styles.css';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp({ Component, pageProps }: AppProps) {
  const mediumWidth = useMediaQuery('(min-width:600px)');
  const iconHeight = mediumWidth ? '12px' : '8px';
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none"
              }
            }
          }
        },
        palette: {
          mode,
          background: {
            ...(mode === 'dark'
              ? {
                default: "#171c24",
                paper: "#222b36"
              }
              : {
                default: "#f4f5f7",
                paper: "#ffffff"
              }),
          },
          primary: {
            ...(mode === 'dark'
              ? {
                contrastText: "#ffffff",
                dark: "rgb(72, 99, 178)",
                light: "rgb(134, 164, 255)",
                main: "#688eff"
              }
              : {
                contrastText: "#ffffff",
                dark: "rgb(60, 70, 147)",
                light: "rgb(119, 131, 219)",
                main: "#5664d2"
              }),
          },
          secondary: {
            contrastText: "#fff",
            dark: "#c51162",
            light: "#ff4081",
            main: "f50057"
          },
          success: {
            contrastText: "#ffffff",
            dark: "rgb(53, 122, 56)",
            light: "rgb(111, 191, 115)",
            main: "#4caf50"
          },
          text: {
            ...(mode === 'dark'
              ? {
                disabled: "rgba(255,255,255, 0.5)",
                primary: "#ffffff",
                secondary: "#919eab"
              }
              : {
                disabled: "rgba(0,0,0, 0.38)",
                primary: "#172b4d",
                secondary: "#6b778c"
              }),
          },
        },
        shape: {
          borderRadius: 16
        },
        typography: {
          fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\""
        }
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <IconButton sx={{ top: iconHeight, right: '10px', position: 'fixed', color: 'text.primary', zIndex: '99999' }} onClick={colorMode.toggleColorMode} >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <SnackbarUtilsConfigurator />
          <Component {...pageProps}></Component>
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default MyApp
