import { Product as ProductInterface } from "@/types/index";
import {
  AddToCartSection,
  ImageContainer,
  PageContainer,
  ProductQuantity,
  Quantity,
  QuantitySection,
  ProductBody,
  ProductSubtitle,
  ProductTitle,
  SectionPrimary,
  SectionSecondary,
  ProductInfo,
  ProductSpecification,
  ProductColumn,
} from "./Product.styles";

export default function Product() {
  const product: ProductInterface = {
    id: 1,
    name: "Energy saving light bulb",
    power: "25W",
    description:
      "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
    price: 1299,
    quantity: 4,
    brand: "Philips",
    weight: 77,
    height: 12.6,
    width: 6.2,
    length: 6.2,
    model_code: "E27 ES",
    colour: "Cool daylight",
    img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
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
          <QuantitySection>
            <span>{product.price}</span>
            <Quantity>
              <button>-</button>
              <ProductQuantity>
                <span>Qty</span> <span>1</span>
              </ProductQuantity>
              <button>+</button>
            </Quantity>
          </QuantitySection>
          <button>Add to cart</button>
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
