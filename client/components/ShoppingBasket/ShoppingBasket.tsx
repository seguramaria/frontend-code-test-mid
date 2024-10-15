import { useContext } from "react";
import { Overlay, BasketContainer } from "./ShoppingBasket.styles";
import { BasketContext } from "@/pages/_app";
import { Product } from "@/types/index";

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
        <button onClick={toggleBasket}>X</button>
        <ul>
          {basket.map((basketProduct: Product) => (
            <li>{basketProduct.name}</li>
          ))}
        </ul>
        <p>Total items: {basketItems}</p>
        <p>Total price: 0</p>
      </BasketContainer>
    </>
  );
}
