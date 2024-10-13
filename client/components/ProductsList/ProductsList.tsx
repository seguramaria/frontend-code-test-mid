import { Product, Product as ProductInterface } from "@/types/index";
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
import { useState } from "react";
import {
  AddToCartSection,
  ProductQuantity,
  QuantityButton,
  QuantityCaption,
  QuantityControl,
  QuantityStepper,
} from "../ProductDetail/ProductDetail.styles";

export default function ProductsList({
  products,
}: {
  products: ProductInterface[];
}) {
  const [cart, setCart] = useState<Product[]>([]);
  if (!products) return <p>Product not found</p>;

  const addToCart = (product: Product) => {
    setCart((prev: Product[]) => [...prev, { ...product, cartQuantity: 1 }]);
  };

  console.log(cart); //TODO Create cart

  const getProductQuantity = (productId: number) => {
    const productInCart = cart.find((item: Product) => item.id === productId);
    return productInCart ? productInCart.cartQuantity : 0;
  };
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
                    <QuantityButton>+</QuantityButton>
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
