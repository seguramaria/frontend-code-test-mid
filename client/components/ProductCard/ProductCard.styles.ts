import {
  porductCardMixin,
  buttonMixin,
  bodyMixin,
  subtitleMixin,
} from "@/styles/mixins";
import styled from "styled-components";

export const ListItem = styled.li`
  ${porductCardMixin}
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProductTitle = styled.h1`
  ${subtitleMixin};
  width: 100%;
  margin: 0;
  padding: 0.25rem 0;
  text-align: justify;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductInfo = styled.p`
  ${bodyMixin}
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 8px 0;
`;

export const AddToCartButton = styled.button`
  ${buttonMixin}
  width: 100%;
  height: 62.3px;
`;
