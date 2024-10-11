import styled from "styled-components";
import {
  bodyMixin,
  containerMixin,
  subtitleMixin,
  titleMixin,
} from "@/styles/mixins";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpointstablet}) {
    padding: 32px;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding: 40px;
  }
`;

export const SectionPrimary = styled.section`
  ${({ theme }) => containerMixin(theme.colors.backgroundPrimary)}
`;

export const SectionSecondary = styled.section`
  ${({ theme }) => containerMixin(theme.colors.backgroundSecondary)}
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  align-self: center;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const ProductTitle = styled.h1`
  ${titleMixin}
  margin: 0;
  letter-spacing: 1.5px;
`;

export const ProductSubtitle = styled.h2`
  margin: 0;
  ${subtitleMixin}
`;

export const ProductBody = styled.p`
  ${bodyMixin}
`;

export const ProductInfo = styled(ProductBody)`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AddToCartSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuantitySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
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
  width: 100%;
  ${ProductColumn}:first-child {
    margin-right: 36px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXl}) {
    width: 50%;
    ${ProductColumn}:first-child {
      margin-right: 50px;
    }
  }
`;
