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
import { useContext } from "react";
import { BasketContext } from "@/pages/_app";

export default function ProductDetail({
  product,
}: {
  product: Product | null;
}) {
  if (!product) return <p>Product not found</p>;

  const {
    getProductQuantity,
    addToBasket,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(BasketContext);
  const currentQuantity = getProductQuantity(product.id);

  const handleIncreaseQuantity = (product: Product) => {
    if (currentQuantity === 0) {
      addToBasket(product);
    } else {
      increaseQuantity(product.id);
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
                  onClick={() => decreaseQuantity(product.id)}
                  disabled={currentQuantity < 1}
                >
                  -
                </QuantityButton>
                <ProductQuantity>
                  <span title="Current quantity">
                    {currentQuantity > 0 ? currentQuantity : 1}
                  </span>
                </ProductQuantity>
                <QuantityButton onClick={() => handleIncreaseQuantity(product)}>
                  +
                </QuantityButton>
              </QuantityStepper>
            </QuantityControl>
          </PriceQuantitySection>

          <AddToCartButton onClick={() => addToBasket(product)}>
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
    </PageContainer>
  );
}
