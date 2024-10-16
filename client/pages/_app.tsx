import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import ApolloWrapper from "../lib/ApolloProvider";
import { useBasket } from "hooks/useBasket";
import { createContext } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const BasketContext = createContext<any>("");

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    basket,
    addToBasket,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
    basketItems,
    totalPrice,
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
          totalPrice,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </BasketContext.Provider>
    </ApolloWrapper>
  );
}
