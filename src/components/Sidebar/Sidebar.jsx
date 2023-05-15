import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="casal" onClick={toggle}>Casal</SidebarLink>
          <SidebarLink to="historia" onClick={toggle}>História</SidebarLink>
          <SidebarLink to="galeria" onClick={toggle}>Galeria</SidebarLink>
          <SidebarLink to="presenca" onClick={toggle}>Confirmações</SidebarLink>
          <SidebarLink to="presentes" onClick={toggle}>Presentes</SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Presença</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar