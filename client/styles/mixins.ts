import { css } from "styled-components";

export const headerMixin = () => css`
  width: 100%;
  max-width: 1108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.palette.background.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

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
  letter-spacing: 1.3px;
  text-align: left;
  margin: 0;
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
    cursor: default;
    &:hover {
      background-color: ${({ theme }) => theme.palette.background.disabled};
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.background.hover};
    color: ${({ theme }) => theme.palette.text.hover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.border.focus};
  }
`;

export const porductCardMixin = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  width: 14rem;
  border: 1px solid ${({ theme }) => theme.palette.border.primary};
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px ${({ theme }) => theme.palette.border.primary};
  }
`;

export const listMixin = () => css`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const iconMixin = () => css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const iconButonMixin = () => css`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;
