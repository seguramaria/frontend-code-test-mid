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

  console.log(cart); //TODO Create cart
  return {
    cart,
    addToCart,
    getProductQuantity,
  };
};
