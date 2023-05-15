import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import theme from '../GlobalStyles'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${theme.color1};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%': '0')}; 
  top: ${( { isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled (FaTimes)`
  color: ${theme.color5};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: ${theme.color5};
`;

export const SidebarMenu = styled.ul` 
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: repeat (6, 80px); 
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (6, 60px);
  }
`;

export const SidebarLink = styled (LinkS)`
  display: flex;
  align-items: center; 
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;

  &:hover {
    font-weight: 700;
    transition: 0.2s ease-in-out;
  }
`;

