import {
  DescriptionBody,
  DescriptionSection,
  DescriptionTitle,
} from "./ProductDescription.styles";

export default function ProductDescription({
  productDescription,
}: {
  productDescription: string;
}) {
  return (
    <DescriptionSection>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionBody>{productDescription}</DescriptionBody>
    </DescriptionSection>
  );
}
