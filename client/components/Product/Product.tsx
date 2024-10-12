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
import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT = gql`
  query {
    Product(id: 1) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;
export default function Product({ productId = 1 }: { productId: number }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.Product;

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
