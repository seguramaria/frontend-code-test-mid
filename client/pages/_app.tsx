import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import ApolloWrapper from "../lib/ApolloProvider";
import { useCart } from "hooks/useCart";
import { createContext } from "react";

export const CartContext = createContext<any>(null);

export default function MyApp({ Component, pageProps }: AppProps) {
  const {
    cart,
    addToCart,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <ApolloWrapper>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          getProductQuantity,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContext.Provider>
    </ApolloWrapper>
  );
}
