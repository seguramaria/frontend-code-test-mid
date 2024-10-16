import styled from "styled-components";
import { bodyMixin, subtitleMixin, wrapperMixin } from "@/styles/mixins";

export const DescriptionSection = styled.section`
  ${wrapperMixin}
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const DescriptionTitle = styled.h2`
  margin: 0;
  ${subtitleMixin}
`;

export const DescriptionBody = styled.p`
  ${bodyMixin}
`;
