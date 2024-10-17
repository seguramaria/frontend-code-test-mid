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
  return (
    <PageContainer>
      <SectionPrimary>
        <ProductImage
          productImgUrl={product.img_url}
          productName={product.name}
        />
        <div>
          <ProductInfo
            productName={product.name}
            productPower={product.power}
            productQuantity={product.quantity}
          />
          <ProductAddToCart product={product} />
        </div>
      </SectionPrimary>
      <>
        <SectionSecondary>
          <ProductDescription productDescription={product.description} />
        </SectionSecondary>
        <SectionTerciary>
          <ProductSpecifications
            productBrand={product.brand}
            productWeight={product.weight}
            productHeight={product.height}
            productWidth={product.width}
            productLength={product.length}
            productModelCode={product.model_code}
            productColour={product.colour}
          />
        </SectionTerciary>
      </>
    </PageContainer>
  );
}
