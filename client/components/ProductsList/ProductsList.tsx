import Link from "next/link";
import {
  AddToCartButton,
  List,
  ListItem,
  ProductPrice,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from "./ProductsList.styles";
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
import { CartContext } from "@/pages/_app";

export default function ProductsList({ products }: { products: Product[] }) {
  const { getProductQuantity, addToCart, increaseQuantity } =
    useContext(CartContext);
    
  return (
    <List>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} passHref key={product.id}>
          <ListItem>
            <ProductImage
              src="https://i.ibb.co/2nzwxnQ/bulb.png"
              alt={product.name}
            />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductInfo>
              {product.power} // Packet of {product.quantity}
            </ProductInfo>
            <ProductPrice>${product.price}</ProductPrice>
            {getProductQuantity(product.id) > 0 ? (
              <AddToCartSection>
                <QuantityControl>
                  <QuantityCaption>Qty</QuantityCaption>
                  <QuantityStepper>
                    <QuantityButton>-</QuantityButton>
                    <ProductQuantity>
                      <span>{getProductQuantity(product.id)}</span>
                    </ProductQuantity>
                    <QuantityButton
                      onClick={(e) => {
                        increaseQuantity(product.id);
                        e.stopPropagation();
                      }}
                      disabled={getProductQuantity(product.id) === 0}
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
                  addToCart(product);
                }}
              >
                Add to cart
              </AddToCartButton>
            )}
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
