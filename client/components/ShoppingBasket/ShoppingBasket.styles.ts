import styled from "styled-components";
export const BasketContainer = styled.div<{ $isOpen: boolean }>`
  height: 100vh;
  padding: 3rem 1rem 1rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0%" : "100%")});
  transition: transform 300ms ease-in-out;
  width: 320px;
  z-index: 3;
  background-color: ${({ theme }) => theme?.palette?.background?.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const CloseButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme?.palette?.text?.primary};
  background: none;
  border: 1px solid ${({ theme }) => theme?.palette?.background?.secondary};
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: auto;
  margin-bottom: 1rem;
  &:hover {
    border: 1px solid ${({ theme }) => theme?.palette?.border.primary};
  }
`;

export const BasketFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.5rem 0.25rem;
  align-items: flex-start;
  position: relative;
  bottom: 0;
  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const ShoppingList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductCardWrapper = styled.li`
  margin: 0 0 1rem 0;
`;
