import styled from "styled-components";
import { bodyMixin, subtitleMixin, wrapperMixin } from "@/styles/mixins";

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

export const ProductSubtitle = styled.p`
  ${bodyMixin}
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 8px 0;
`;
