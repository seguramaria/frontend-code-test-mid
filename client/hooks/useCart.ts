import { useState } from "react";
import { Product } from "@/types/index";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev: Product[]) => [...prev, { ...product, cartQuantity: 1 }]);
  };

  const getProductQuantity = (productId: number) => {
    const productInCart = cart.find((item: Product) => item.id === productId);
    return productInCart ? productInCart?.cartQuantity : 0;
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item: Product) => {
      if (item.id === id && item.cartQuantity) {
        return { ...item, cartQuantity: item.cartQuantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item: Product) => {
        if (item.id === id && item?.cartQuantity) {
          return {
            ...item,
            cartQuantity: item?.cartQuantity - 1,
          };
        }
        return item;
      })
      .filter((item: Product) => item?.cartQuantity && item.cartQuantity > 0);

    setCart(updatedCart);
  };

  console.log(cart); //TODO Create cart
  return {
    cart,
    addToCart,
    getProductQuantity,
    increaseQuantity,
    decreaseQuantity,
  };
};
