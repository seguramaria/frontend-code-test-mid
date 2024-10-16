import styled from "styled-components";
import { buttonMixin, captionMixin, wrapperMixin } from "@/styles/mixins";

export const AddToCartSection = styled.div`
  ${wrapperMixin}
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

export const QuantitySection = styled.div`
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

export const QuantityCaption = styled.p`
  ${captionMixin}
`;

export const QuantityPicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  ${buttonMixin}
  width: 1rem;
  height: 1rem;
`;

export const AddToCartButton = styled.button`
  ${buttonMixin}
  width: 100%;
  margin-bottom: 1rem;
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
