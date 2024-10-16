import Link from "next/link";
import { AddToCartButton, Card, ProductImage } from "./ProductCard.styles";
import { Product } from "@/types/index";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductAddToCart from "./components/ProductAddToCart/ProductAddToCart";

export default function ProductCard({ product }: { product: Product }) {
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
        <ProductImage
          src="https://i.ibb.co/2nzwxnQ/bulb.png"
          alt={product.name}
        />
        <ProductInfo
          productName={product.name}
          productPower={product.power}
          productQuantity={product.quantity}
          productPrice={formattedPrice(product.price)}
        />
        {productQuantity ? (
          <ProductAddToCart
            product={product}
            productQuantity={productQuantity}
          />
        ) : (
          <AddToCartButton
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
