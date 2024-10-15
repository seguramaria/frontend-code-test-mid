import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 1108px;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 1108px;
  padding-bottom: 5rem;
  min-height: calc(100vh - 120px);
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center; /* Centrar elementos horizontalmente */
  }
`;
