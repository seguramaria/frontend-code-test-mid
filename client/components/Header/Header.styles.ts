import { headerMixin, iconMixin } from "@/styles/mixins";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageHeader = styled.header`
  ${headerMixin()}
`;

export const Logo = styled.img`
  width: 10rem;
  height: 2rem;
`;

export const BasketIconButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const BasketIcon = styled.img`
  ${iconMixin()}
`;
