import styled from "styled-components";
import { containerMixin } from "@/styles/mixins";

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    padding-bottom: 3rem;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}) {
    padding-bottom: 4rem;
  }
`;

export const SectionPrimary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.primary)}
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 3rem;
    max-width: 1108px;
  }
`;

export const SectionSecondary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.secondary)}
`;
export const SectionTerciary = styled.section`
  ${({ theme }) => containerMixin(theme?.palette?.background?.primary)}
`;
