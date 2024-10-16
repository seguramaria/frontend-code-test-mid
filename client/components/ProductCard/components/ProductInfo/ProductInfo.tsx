import {
  ProductPrice,
  ProductSubtitle,
  ProductTitle,
} from "./ProductInfo.styles";

type Props = {
  productName: string;
  productPower: string;
  productQuantity: number;
  productPrice: string;
};

export default function ProductInfo({
  productName,
  productPower,
  productQuantity,
  productPrice,
}: Props) {
  return (
    <>
      <ProductTitle>{productName}</ProductTitle>
      <ProductSubtitle>
        {productPower} // Packet of {productQuantity}
      </ProductSubtitle>
      <ProductPrice>{productPrice}</ProductPrice>
    </>
  );
}
