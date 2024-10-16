import styled from "styled-components";
import { bodyMixin, titleMixin, wrapperMixin } from "@/styles/mixins";

export const ProductInfoSection = styled.div`
  ${wrapperMixin}
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding-bottom: 0;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}) {
    padding-bottom: 0;
  }
`;

export const ProductTitle = styled.h1`
  ${titleMixin}
`;

export const ProductSubtitle = styled.p`
  ${bodyMixin}
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  margin-bottom: 0;
`;
