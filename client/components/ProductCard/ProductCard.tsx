import Link from "next/link";
import {
  AddToCartButton,
  ListItem,
  ProductPrice,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from "./ProductCard.styles";
import {
  AddToCartSection,
  ProductQuantity,
  QuantityButton,
  QuantityCaption,
  QuantityControl,
  QuantityStepper,
} from "../ProductDetail/ProductDetail.styles";
import { Product } from "@/types/index";
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";

export default function ProductCard({ product }: { product: Product }) {
  const {
    getProductQuantity,
    addToBasket,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(BasketContext);
  const formattedPrice = (priceInCents: number) => {
    return (priceInCents / 100).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };
  return (
    <Link href={`/product/${product.id}`} passHref>
      <ListItem>
        <ProductImage
          src="https://i.ibb.co/2nzwxnQ/bulb.png"
          alt={product.name}
        />
        <ProductTitle>{product.name}</ProductTitle>
        <ProductInfo>
          {product.power} // Packet of {product.quantity}
        </ProductInfo>
        <ProductPrice>{formattedPrice(product.price)}</ProductPrice>
        {getProductQuantity(product.id) ? (
          <AddToCartSection>
            <QuantityControl>
              <QuantityCaption>Qty</QuantityCaption>
              <QuantityStepper>
                {getProductQuantity(product.id) === 1 ? (
                  <QuantityButton
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQuantity(product.id);
                    }}
                    disabled={getProductQuantity(product.id) < 1}
                  >
                    <img src="/delete.svg" alt="remove product from cart" />
                  </QuantityButton>
                ) : (
                  <QuantityButton
                    onClick={(e) => {
                      e.stopPropagation();
                      decreaseQuantity(product.id);
                    }}
                    disabled={getProductQuantity(product.id) < 1}
                  >
                    -
                  </QuantityButton>
                )}
                <ProductQuantity>
                  <span>{getProductQuantity(product.id)}</span>
                </ProductQuantity>
                <QuantityButton
                  onClick={(e) => {
                    e.stopPropagation();
                    increaseQuantity(product.id);
                  }}
                >
                  +
                </QuantityButton>
              </QuantityStepper>
            </QuantityControl>
          </AddToCartSection>
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
      </ListItem>
    </Link>
  );
}
