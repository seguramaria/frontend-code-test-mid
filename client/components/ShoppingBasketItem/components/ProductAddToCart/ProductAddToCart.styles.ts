import { buttonMixin, captionMixin } from "@/styles/mixins";
import styled from "styled-components";

export const AddToCartSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductQuantity = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuantitySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const QuantityButton = styled.button`
  ${buttonMixin}
  width: 1rem;
  height: 1rem;
`;

export const QuantityCaption = styled.p`
  ${captionMixin}
  margin-top: 0;
`;

export const QuantityPicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
