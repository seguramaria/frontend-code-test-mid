import { Product as ProductInterface } from "@/types/index";
import {
  AddToCartSection,
  ImageContainer,
  PageContainer,
  ProductQuantity,
  Quantity,
  QuantitySection,
  Section,
  Subtitle,
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
      <Section>
        <ImageContainer>
          <img src={product.img_url} />
        </ImageContainer>
        <h1>{product.name}</h1>
        <Subtitle>
          {product.power} // Packet of {product.quantity}
        </Subtitle>
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
      </Section>
      <div>
        <Section>
          <h4>Description</h4>
          <p>{product.description}</p>
        </Section>
        <Section>
          <h4>Specifications</h4>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>Brand</div>
              <div>Item weight (g)</div>fonts
              <div>Dimensions (cm)</div>
              <div>Item Model Number</div>
              <div>Colour</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{product.brand}</div>
              <div>{product.weight}</div>
              <div>{product.height}</div>
              <div>{product.model_code}</div>
              <div>{product.colour}</div>
            </div>
          </div>
        </Section>
      </div>
    </PageContainer>
  );
}
