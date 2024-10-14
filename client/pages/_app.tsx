import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import ApolloWrapper from "../lib/ApolloProvider";
import { useBasket } from "hooks/useBasket";
import { createContext } from "react";
import Header from "@/components/Header/Header";

export const BasketContext = createContext<any>(null);

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    basket,
    addToBasket,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
    basketItems,
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
          basketItems,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </BasketContext.Provider>
    </ApolloWrapper>
  );
}
