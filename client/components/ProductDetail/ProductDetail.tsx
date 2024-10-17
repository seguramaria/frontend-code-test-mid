import { Product } from "@/types/index";
import {
  PageContainer,
  SectionPrimary,
  SectionSecondary,
  SectionTerciary,
} from "./ProductDetail.styles";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ProductAddToCart from "./components/ProductAddToCart/ProductAddToCart";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductSpecifications from "./components/ProductSpecifications/ProductSpecifications";

export default function ProductDetail({
  product,
}: {
  product: Product | null;
}) {
  if (!product) return <p>Product not found</p>;
  const {
    img_url,
    name,
    power,
    quantity,
    description,
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
  } = product;

  return (
    <PageContainer>
      <SectionPrimary>
        <ProductImage productImgUrl={img_url} productName={name} />
        <div>
          <ProductInfo
            productName={name}
            productPower={power}
            productQuantity={quantity}
          />
          <ProductAddToCart product={product} />
        </div>
      </SectionPrimary>
      <>
        <SectionSecondary>
          <ProductDescription productDescription={description} />
        </SectionSecondary>
        <SectionTerciary>
          <ProductSpecifications
            productBrand={brand}
            productWeight={weight}
            productHeight={height}
            productWidth={width}
            productLength={length}
            productModelCode={model_code}
            productColour={colour}
          />
        </SectionTerciary>
      </>
    </PageContainer>
  );
}
