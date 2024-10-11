import { css } from "styled-components";

export const containerMixin = (backgroundColor: string) => css`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
  background-color: ${backgroundColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 21px 32px;
  }
`;

export const titleMixin = css`
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const subtitleMixin = css`
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const bodyMixin = css`
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
