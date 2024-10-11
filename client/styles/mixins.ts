import { css } from "styled-components";

export const containerMixin = () => css`
  padding: 8px 16px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 12px32px;
  }
`;
