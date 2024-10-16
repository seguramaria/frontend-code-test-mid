import styled from "styled-components";
import {
  bodyMixin,
  buttonMixin,
  captionMixin,
  containerMixin,
  subtitleMixin,
  titleMixin,
} from "@/styles/mixins";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding-bottom: 3rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}) {
    padding-bottom: 4rem;
  }
`;

export const SectionPrimary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.primary)}
`;

export const SectionSecondary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.secondary)}
`;
export const SectionTerciary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.primary)}
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  align-self: center;
  margin-bottom: 1rem;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

export const ProductTitle = styled.h1`
  ${titleMixin}
`;

export const ProductSubtitle = styled.h2`
  margin: 0;
  ${subtitleMixin}
`;

export const ProductBody = styled.p`
  ${bodyMixin}
`;

export const ProductInfo = styled(ProductBody)`
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  margin-bottom: 0;
`;

export const AddToCartSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PriceQuantitySection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantity = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSpecification = styled.div`
  display: flex;
  ${ProductColumn}:first-child {
    margin-right: 2.25rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.mobileXl}) {
    ${ProductColumn}:first-child {
      margin-right: 3.125rem;
    }
  }
`;

export const AddToCartButton = styled.button`
  ${buttonMixin}
  width: 100%;
`;

export const QuantityButton = styled.button`
  ${buttonMixin}
  width: 1rem;
  height: 1rem;
`;

export const QuantityCaption = styled.p`
  ${captionMixin}
`;

export const QuantityStepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Popover = styled.div`
  position: absolute;
  width: 80%;
  max-width: 375px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme?.palette?.background?.secondary};
  padding: 0.625rem;
  border-radius: 8px;
  z-index: 100;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
  p {
    margin: 0;
  }
`;
