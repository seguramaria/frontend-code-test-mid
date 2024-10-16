import styled from "styled-components";
import { bodyMixin, subtitleMixin, wrapperMixin } from "@/styles/mixins";

export const SpecificationsSection = styled.section`
  ${wrapperMixin}
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SpecificationsTitle = styled.h2`
  margin: 0;
  ${subtitleMixin}
`;

export const SpecificationBody = styled.p`
  ${bodyMixin}
`;

export const SpecificationColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductSpecification = styled.div`
  display: flex;
  ${SpecificationColumn}:first-child {
    margin-right: 2.25rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.mobileXl}) {
    ${SpecificationColumn}:first-child {
      margin-right: 3.125rem;
    }
  }
`;
