import Link from "next/link";
import {
  AddToCartButton,
  Card,
  ProductPrice,
  ProductTitle,
} from "./ShoppingBasketItem.styles";
import { Product } from "@/types/index";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";
import ProductAddToCart from "./components/ProductAddToCart/ProductAddToCart";

export default function ShoppingBasdketItem({ product }: { product: Product }) {
  const { getProductQuantity, addToBasket } = useContext(BasketContext);
  if (!product) return null;

  const formattedPrice = (priceInCents: number) => {
    return (priceInCents / 100).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };
  const productQuantity = getProductQuantity(product.id);

  return (
    <Link href={`/product/${product.id}`} passHref>
      <Card>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{formattedPrice(product.price)}</ProductPrice>
        {productQuantity ? (
          <ProductAddToCart
            product={product}
            productQuantity={productQuantity}
          />
        ) : (
          <AddToCartButton
            title="Add product to cart"
            onClick={(e) => {
              e.stopPropagation();
              addToBasket(product, 1);
            }}
          >
            Add to cart
          </AddToCartButton>
        )}
      </Card>
    </Link>
  );
}
