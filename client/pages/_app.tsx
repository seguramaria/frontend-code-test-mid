import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import ApolloWrapper from "../lib/ApolloProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloWrapper>
  );
}
