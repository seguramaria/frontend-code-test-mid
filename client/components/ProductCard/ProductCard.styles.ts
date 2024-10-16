import { productCardMixin, buttonMixin } from "@/styles/mixins";
import styled from "styled-components";

export const Card = styled.li`
  ${productCardMixin}
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const AddToCartButton = styled.button`
  ${buttonMixin}
  width: 100%;
  height: 56px;
`;
