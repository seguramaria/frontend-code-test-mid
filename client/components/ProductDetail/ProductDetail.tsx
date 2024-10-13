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
} from "./ProductDetail.styles";

export default function Product({
  product,
}: {
  product: ProductInterface | null;
}) {
  if (!product) return <p>Product not found</p>;
  const {
    id,
    name,
    power,
    description,
    price,
    quantity,
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
    img_url,
  } = product;

  return (
    <PageContainer>
      <SectionPrimary>
        <ImageContainer>
          <img src={img_url} />
        </ImageContainer>
        <ProductTitle>{name}</ProductTitle>
        <ProductInfo>
          {power} // Packet of {quantity}
        </ProductInfo>
        <AddToCartSection>
          <PriceQuantitySection>
            <span>£{price}</span>
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
          <ProductBody>{description}</ProductBody>
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
              <ProductBody>{brand}</ProductBody>
              <ProductBody>{weight}</ProductBody>
              <ProductBody>
                {height} x {width} x{length}
              </ProductBody>
              <ProductBody>{model_code}</ProductBody>
              <ProductBody>{colour}</ProductBody>
            </ProductColumn>
          </ProductSpecification>
        </SectionPrimary>
      </div>
    </PageContainer>
  );
}
