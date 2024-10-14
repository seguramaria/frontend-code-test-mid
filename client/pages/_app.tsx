import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import ApolloWrapper from "../lib/ApolloProvider";
import { useBasket } from "hooks/useBasket";
import { createContext } from "react";

export const BasketContext = createContext<any>(null);

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    basket,
    addToBasket,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
  } = useBasket();

  return (
    <ApolloWrapper>
      <BasketContext.Provider
        value={{
          basket,
          addToBasket,
          getProductQuantity,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </BasketContext.Provider>
    </ApolloWrapper>
  );
}
