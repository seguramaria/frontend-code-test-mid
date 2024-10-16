import { useContext } from "react";
import {
  Overlay,
  BasketContainer,
  CloseButton,
  BasketFooter,
} from "./ShoppingBasket.styles";
import { ShoppingList, ProductCardWrapper } from "./ShoppingBasket.styles";
import { BasketContext } from "@/pages/_app";
import { Product } from "@/types/index";
import ShoppingBasketItem from "../ShoppingBasketItem/ShoppingBasketItem";

interface ShoppingBasketProps {
  isOpen: boolean;
  toggleBasket: () => void;
}

export default function ShoppingBasket({
  isOpen,
  toggleBasket,
}: ShoppingBasketProps) {
  const { basket, basketItems } = useContext(BasketContext);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={toggleBasket} />
      <BasketContainer $isOpen={isOpen}>
        <CloseButton title="Close shopping basket" onClick={toggleBasket}>
          X
        </CloseButton>
        <ShoppingList>
          {basket.map((basketProduct: Product) => (
            <ProductCardWrapper key={basketProduct.id}>
              <ShoppingBasketItem product={basketProduct} />
            </ProductCardWrapper>
          ))}
        </ShoppingList>
        <BasketFooter>
          <p>Total items: {basketItems}</p>
          <p>Total price: 0</p>
        </BasketFooter>
      </BasketContainer>
    </>
  );
}
