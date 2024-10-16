import { productCardMixin, buttonMixin, subtitleMixin } from "@/styles/mixins";

import styled from "styled-components";

export const Card = styled.div`
  ${productCardMixin}
  max-width: 100%;
`;

export const AddToCartButton = styled.button`
  ${buttonMixin}
  width: 100%;
  height: 56px;
`;

export const ProductTitle = styled.h1`
  ${subtitleMixin};
  width: 100%;
  margin: 0;
  padding-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 8px 0;
`;
