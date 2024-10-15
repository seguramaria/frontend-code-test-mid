import styled from "styled-components";

export const BasketContainer = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  padding: 3rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0%" : "100%")});
  transition: transform 300ms ease-in-out;
  width: 320px;
  z-index: 3;
  background-color: ${({ theme }) => theme?.palette?.background?.secondary};
  button {
    font-size: 1rem;
    color: ${({ theme }) => theme?.palette?.text?.primary};
    background: none;
    border: 0;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: opacity 250ms ease-in-out, visibility 0s;
  z-index: 2;
`;
