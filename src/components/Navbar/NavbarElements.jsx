import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import theme from '../GlobalStyles'

export const Nav = styled.nav`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  &.active {
    background: ${theme.color5};
    box-shadow: 0 1px 5px rgba(0,0,0,.1);
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${theme.color1};
  font-family: ${theme.font1};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 300;
  text-decoration: none;
  white-space: nowrap
`;

export const MobileIcon= styled.div` 
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 60%);
    align-items: center;
    display: flex;
    padding 20px;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${theme.color1};
  }
`;

export const NavMenu = styled.ul`
  display: flex; 
  align-items: center; 
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) { 
    display: none;
  }
`;

export const NavItem = styled.li` 
`;

export const NavLinks = styled (LinkS)` 
  color: ${theme.color2}; 
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 40px 20px;
  display: flex; 
  align-items: center; 
  text-decoration: none; 
  cursor: pointer;

  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  transition: border-bottom 0.2s;

  &.active {
    color: ${theme.color1};
    text-decoration: none;
    border-bottom: 3px solid ${theme.color1};
  }

  &:hover {
    color: ${theme.color1};
    text-decoration: none;
    border-bottom: 3px solid ${theme.color1};
  }
`;

export const NavBtn = styled.nav` 
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) { 
    display: none;
  }
`;

export const NavBtnLink = styled (LinkR)`
  border-radius: 50px;
  background: ${theme.color1};
  font-weight: 600;
  white-space: nowrap; 
  padding: 15px 45px; 
  text-transform: uppercase;
  color: ${theme.color5};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #bda2a6;
    // color: #010606;
  }
`;