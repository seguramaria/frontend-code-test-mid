import { ImageContainer } from "./ProductImage.styles";

type Props = {
  productImgUrl: string;
  productName: string;
};
export default function ProductImage({ productImgUrl, productName }: Props) {
  return (
    <ImageContainer>
      <img src={productImgUrl} alt={`${productName} image`} />
    </ImageContainer>
  );
}
