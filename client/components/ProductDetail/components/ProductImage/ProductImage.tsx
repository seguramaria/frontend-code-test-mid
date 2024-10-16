import { ImageContainer } from "./ProductImage.styles";

export default function ProductImage({
  productImgUrl,
}: {
  productImgUrl: string;
}) {
  return (
    <ImageContainer>
      <img src={productImgUrl} />
    </ImageContainer>
  );
}
