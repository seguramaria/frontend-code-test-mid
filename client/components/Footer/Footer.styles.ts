import { captionMixin, wrapperMixin } from "@/styles/mixins";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme?.palette?.background?.secondary};
  padding: 1rem;
  text-align: left;
  width: 100%;

  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding: 1rem 3rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}) {
    padding: 3rem;
  }
`;

export const FooterText = styled.p`
  ${captionMixin}
  max-width: 1108px;
  margin: 0px auto;
  color: ${({ theme }) => theme?.palette?.text?.disabled};
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    font-size: 0.75rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}) {
    padding-inline: 3rem;
  }
`;
