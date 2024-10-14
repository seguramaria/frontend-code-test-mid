import { useState } from "react";
import { Product } from "@/types/index";

export const useBasket = () => {
  const [basket, setBasket] = useState<Product[]>([]);

  const addToBasket = (product: Product) => {
    setBasket((prev: Product[]) => [
      ...prev,
      { ...product, currentQuantity: 1 },
    ]);
  };

  const getProductQuantity = (productId: number) => {
    const productInBasket = basket.find(
      (item: Product) => item.id === productId
    );
    return productInBasket ? productInBasket?.currentQuantity : 0;
  };

  const increaseQuantity = (id: number) => {
    const updatedBasket = basket.map((item: Product) => {
      if (item.id === id && item.currentQuantity) {
        return { ...item, currentQuantity: item.currentQuantity + 1 };
      }
      return item;
    });
    setBasket(updatedBasket);
  };

  const decreaseQuantity = (id: number) => {
    const updatedBasket = basket
      .map((item: Product) => {
        if (item.id === id && item?.currentQuantity) {
          return {
            ...item,
            currentQuantity: item?.currentQuantity - 1,
          };
        }
        return item;
      })
      .filter(
        (item: Product) => item?.currentQuantity && item.currentQuantity > 0
      );

    setBasket(updatedBasket);
  };

  console.log(basket); //TODO Create basket
  return {
    basket,
    addToBasket,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
  };
};
