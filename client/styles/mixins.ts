import { css } from "styled-components";

export const containerMixin = (backgroundColor: string) => css`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
  background-color: ${backgroundColor};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.75rem 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1.5 2rem;
  }
`;

export const titleMixin = css`
  font-weight: ${({ theme }) => theme.typography.title.fontWeight};
  font-size: ${({ theme }) => theme.typography.title.fontSize};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const subtitleMixin = css`
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const bodyMixin = css`
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const captionMixin = css`
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const buttonMixin = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.palette.background.accent};
  font-weight: ${({ theme }) => theme.typography.action.fontWeight};
  font-size: ${({ theme }) => theme.typography.action.fontSize};
  color: ${({ theme }) => theme.palette.text.secondary};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.background.disabled};
    color: ${({ theme }) => theme.palette.text.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.hover};
    color: ${({ theme }) => theme.palette.text.hover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.background.focus};
  }
`;
