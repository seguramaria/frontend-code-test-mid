import {
  SpecificationBody,
  SpecificationsTitle,
  ProductSpecification,
  SpecificationColumn,
  SpecificationsSection,
} from "./ProductSpecifications.styles";

type Props = {
  productBrand: string;
  productWeight: number;
  productHeight: number;
  productWidth: number;
  productLength: number;
  productModelCode: string;
  productColour: string;
};
export default function ProductSpecifications({
  productBrand,
  productWeight,
  productHeight,
  productWidth,
  productLength,
  productModelCode,
  productColour,
}: Props) {
  return (
    <SpecificationsSection>
      <SpecificationsTitle>Specifications</SpecificationsTitle>
      <ProductSpecification>
        <SpecificationColumn>
          <SpecificationBody>Brand</SpecificationBody>
          <SpecificationBody>Item weight (g)</SpecificationBody>
          <SpecificationBody>Dimensions (cm)</SpecificationBody>
          <SpecificationBody>Item Model Number</SpecificationBody>
          <SpecificationBody>Colour</SpecificationBody>
        </SpecificationColumn>
        <SpecificationColumn>
          <SpecificationBody>{productBrand}</SpecificationBody>
          <SpecificationBody>{productWeight}</SpecificationBody>
          <SpecificationBody>
            {productHeight} x {productWidth} x {productLength}
          </SpecificationBody>
          <SpecificationBody>{productModelCode}</SpecificationBody>
          <SpecificationBody>{productColour}</SpecificationBody>
        </SpecificationColumn>
      </ProductSpecification>
    </SpecificationsSection>
  );
}
