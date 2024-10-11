import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
