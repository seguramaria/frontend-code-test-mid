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
