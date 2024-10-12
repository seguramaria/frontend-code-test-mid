import { Product as ProductInterface } from "@/types/index";
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
} from "./Product.styles";

export default function Product({
  product,
}: {
  product: ProductInterface | null;
}) {
  if (!product) return <p>Product not found</p>;
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
                  <span>1</span>
                </ProductQuantity>
                <QuantityButton>+</QuantityButton>
              </QuantityStepper>
            </QuantityControl>
          </PriceQuantitySection>
          <AddToCartButton>Add to cart</AddToCartButton>
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
              <ProductBody>{product.height}</ProductBody>
              <ProductBody>{product.model_code}</ProductBody>
              <ProductBody>{product.colour}</ProductBody>
            </ProductColumn>
          </ProductSpecification>
        </SectionPrimary>
      </div>
    </PageContainer>
  );
}
