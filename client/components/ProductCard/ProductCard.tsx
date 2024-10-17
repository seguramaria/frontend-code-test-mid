import Link from "next/link";
import { AddToCartButton, Card, ProductImage } from "./ProductCard.styles";
import { Product } from "@/types/index";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductAddToCart from "./components/ProductAddToCart/ProductAddToCart";
import { formattedPrice } from "utils/formattedPrice";

export default function ProductCard({ product }: { product: Product }) {
  const { getProductQuantity, addToBasket } = useContext(BasketContext);
  if (!product) return null;

  const productQuantity = getProductQuantity(product.id);
  const { name, power, quantity, price } = product;

  return (
    <Link href={`/product/${product.id}`} passHref>
      <Card>
        <ProductImage src="https://i.ibb.co/2nzwxnQ/bulb.png" alt={name} />
        <ProductInfo
          productName={name}
          productPower={power}
          productQuantity={quantity}
          productPrice={formattedPrice(price)}
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
