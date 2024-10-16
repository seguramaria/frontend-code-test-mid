import styled from "styled-components";
import { bodyMixin, titleMixin, wrapperMixin } from "@/styles/mixins";

export const ProductInfoSection = styled.div`
  ${wrapperMixin}
`;

export const ProductTitle = styled.h1`
  ${titleMixin}
`;

export const ProductSubtitle = styled.p`
  ${bodyMixin}
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  margin-bottom: 0;
`;
