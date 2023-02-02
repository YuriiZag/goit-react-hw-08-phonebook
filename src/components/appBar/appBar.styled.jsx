import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
  height: 10%;
  background-color: ${p => p.theme.colors.headerBackground};
  border-radius: ${p => p.theme.radii.normal}px;
`;
export const NavItem = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: 500;
  text-decoration: none;
  &.active {
    text-decoration: underline currentColor;
  }
  :hover,
  :focus {
    text-decoration: underline currentColor;
  }
`;

export const NavList = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`