import styled from "styled-components";
import { containerMixin } from "@/styles/mixins";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`

  ${containerMixin}
  h1 {
    font-size: 1.5rem; /
  }
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

export const Subtitle = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 8px 0;
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
