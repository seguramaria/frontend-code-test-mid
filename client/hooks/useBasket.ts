import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types/index";

export const useBasket = () => {
  const [basket, setBasket] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const localStorageBasket = localStorage.getItem("shopping-basket");
    if (localStorageBasket) {
      setBasket(JSON.parse(localStorageBasket));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("shopping-basket", JSON.stringify(basket));
    }
  }, [basket, isClient]);

  const addToBasket = (product: Product, quantity: number) => {
    setBasket((prevBasket: Product[]) => {
      const productInBasket = prevBasket.find(
        (item: Product) => item.id === product.id
      );

      if (productInBasket) {
        return prevBasket.map((item: Product) =>
          item.id === product.id ? { ...item, currentQuantity: quantity } : item
        );
      } else {
        return [...prevBasket, { ...product, currentQuantity: quantity }];
      }
    });
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
        if (item.id === id) {
          if (item.currentQuantity && item.currentQuantity > 0) {
            return {
              ...item,
              currentQuantity: item.currentQuantity - 1,
            };
          }
        }
        return item;
      })
      .filter(
        (item: Product) => item.currentQuantity && item.currentQuantity > 0
      );

    setBasket(updatedBasket);
  };

  const basketItems = useMemo(
    () =>
      basket.reduce(
        (acc: number, product: Product) => acc + (product.currentQuantity || 0),
        0
      ),
    [basket]
  );

  const totalPrice = useMemo(
    () =>
      basket
        .reduce(
          (total: number, product: Product) =>
            total + (product.currentQuantity || 0) * product.price,
          0
        )
        .toFixed(),
    [basket]
  );

  return {
    basket,
    addToBasket,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
    basketItems,
    totalPrice,
  };
};
