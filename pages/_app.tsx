import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/global.css'
import { createTheme, IconButton, ThemeProvider, useTheme } from '@mui/material';
import type { AppProps } from 'next/app'
import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp({ Component, pageProps }: AppProps) {
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
            contrastText: "#ffffff",
            dark: "rgb(60, 70, 147)",
            light: "rgb(119, 131, 219)",
            main: "#5664d2"
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
          }
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <IconButton sx={{ top: '0', right: '10px', position: 'fixed', color: 'text.primary' }} onClick={colorMode.toggleColorMode} >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default MyApp
