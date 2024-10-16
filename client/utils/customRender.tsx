import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import ApolloWrapper from "@/lib/ApolloProvider";
import { useBasket } from "@/hooks/useBasket";
import { GlobalStyle } from "@/styles/global";
import { BasketContext } from "@/pages/_app";

const Providers = ({ children }: { children: React.ReactNode }) => {
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
          {children}
        </ThemeProvider>
      </BasketContext.Provider>
    </ApolloWrapper>
  );
};

export const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: Providers });
