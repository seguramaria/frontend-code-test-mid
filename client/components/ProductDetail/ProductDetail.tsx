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
import { useState, useContext } from "react";
import { BasketContext } from "@/pages/_app";

export default function ProductDetail({
  product,
}: {
  product: Product | null;
}) {
  if (!product) return <p>Product not found</p>;

  const { addToBasket, basketItems } = useContext(BasketContext);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleAddToBasket = () => {
    if (currentQuantity > 0) {
      addToBasket(product, currentQuantity);
    }
  };

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
                <QuantityButton
                  onClick={() => {
                    if (currentQuantity > 1) {
                      setCurrentQuantity(currentQuantity - 1);
                    }
                  }}
                  disabled={currentQuantity < 1}
                >
                  -
                </QuantityButton>
                <ProductQuantity>
                  <span title="Current quantity">{currentQuantity}</span>
                </ProductQuantity>
                <QuantityButton
                  onClick={() => setCurrentQuantity(currentQuantity + 1)}
                >
                  +
                </QuantityButton>
              </QuantityStepper>
            </QuantityControl>
          </PriceQuantitySection>

          <AddToCartButton onClick={handleAddToBasket}>
            Add to cart
          </AddToCartButton>
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
      <p title="Basket items">{basketItems}</p>
    </PageContainer>
  );
}
