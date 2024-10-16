import {
  ProductInfoSection,
  ProductSubtitle,
  ProductTitle,
} from "./ProductInfo.styles";

type Props = {
  productName: string;
  productPower: string;
  productQuantity: number;
};

export default function ProductInfo({
  productName,
  productPower,
  productQuantity,
}: Props) {
  return (
    <ProductInfoSection>
      <ProductTitle>{productName}</ProductTitle>
      <ProductSubtitle>
        {productPower} // Packet of {productQuantity}
      </ProductSubtitle>
    </ProductInfoSection>
  );
}
