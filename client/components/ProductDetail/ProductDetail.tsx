import { Product } from "@/types/index";
import {
  AddToCartSection,
  ImageContainer,
  PageContainer,
  ProductQuantity,
  QuantityCaption,
  ProductBody,
  ProductSubtitle,
  ProductTitle,
  SectionPrimary,
  SectionSecondary,
  ProductInfo,
  ProductSpecification,
  ProductColumn,
  QuantityButton,
  AddToCartButton,
  PriceQuantitySection,
  QuantityControl,
  QuantityStepper,
} from "./ProductDetail.styles";
import { useState } from "react";

export default function ProductDetail({
  product,
}: {
  product: Product | null;
}) {
  const [cart, setCart] = useState<Product[]>([]);
  if (!product) return <p>Product not found</p>;

  const addToCart = (product: Product) => {
    //TODO: Create hook
    setCart((prev: Product[]) => [...prev, { ...product, cartQuantity: 1 }]);
  };

  const getProductQuantity = (productId: number) => {
    const productInCart = cart.find((item: Product) => item.id === productId);
    return productInCart ? productInCart.cartQuantity : 0;
  };
  console.log(cart); // TODO: Create Cart component
  return (
    <PageContainer>
      <SectionPrimary>
        <ImageContainer>
          <img src={product.img_url} />
        </ImageContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductInfo>
          {product.power} // Packet of {product.quantity}
        </ProductInfo>
        <AddToCartSection>
          <PriceQuantitySection>
            <span>£{product.price}</span>
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
          </PriceQuantitySection>
          {getProductQuantity(product.id) > 0 ? (
            <AddToCartButton disabled>Product added</AddToCartButton>
          ) : (
            <AddToCartButton onClick={() => addToCart(product)}>
              Add to cart
            </AddToCartButton>
          )}
        </AddToCartSection>
      </SectionPrimary>
      <div>
        <SectionSecondary>
          <ProductSubtitle>Description</ProductSubtitle>
          <ProductBody>{product.description}</ProductBody>
        </SectionSecondary>
        <SectionPrimary>
          <ProductSubtitle>Specifications</ProductSubtitle>
          <ProductSpecification>
            <ProductColumn>
              <ProductBody>Brand</ProductBody>
              <ProductBody>Item weight (g)</ProductBody>
              <ProductBody>Dimensions (cm)</ProductBody>
              <ProductBody>Item Model Number</ProductBody>
              <ProductBody>Colour</ProductBody>
            </ProductColumn>
            <ProductColumn>
              <ProductBody>{product.brand}</ProductBody>
              <ProductBody>{product.weight}</ProductBody>
              <ProductBody>
                {product.height} x {product.width} x{product.length}
              </ProductBody>
              <ProductBody>{product.model_code}</ProductBody>
              <ProductBody>{product.colour}</ProductBody>
            </ProductColumn>
          </ProductSpecification>
        </SectionPrimary>
      </div>
    </PageContainer>
  );
}
