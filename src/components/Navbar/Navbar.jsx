import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { Container } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {
  const [navbar, setNavBar] = useState(false)

  const changeBackground = () => {
    if(window. scrollY >= 1){
      setNavBar(true)
    }else{
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const goToHome = () => {
    scroll.scrollToTop();
  }

  return (
    // <>
      <Nav className={navbar ? 'active' : ''}>
        <Container>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <NavLogo to='/' onClick={goToHome}>L & C</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>

            <NavMenu>
              <NavItem><NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-110}>Home</NavLinks></NavItem>
              <NavItem><NavLinks to="casal" smooth={true} duration={500} spy={true} exact='true' offset={-110}>Casal</NavLinks></NavItem>
              <NavItem><NavLinks to="historia" smooth={true} duration={500} spy={true} exact='true' offset={-110}>História</NavLinks></NavItem>
              <NavItem><NavLinks to="galeria" smooth={true} duration={500} spy={true} exact='true' offset={-110}>Galeria</NavLinks></NavItem>
              <NavItem><NavLinks to="presenca" smooth={true} duration={500} spy={true} exact='true' offset={-110}>Confirmações</NavLinks></NavItem>
              <NavItem><NavLinks to="presentes" smooth={true} duration={500} spy={true} exact='true' offset={-110}>Presentes</NavLinks></NavItem>
            </NavMenu>

            {/* <NavBtn>
              <NavBtnLink to="/signin">Presença</NavBtnLink>
            </NavBtn> */}
          </div>
          

        </Container>
      </Nav>
    // </>
  )
}

export default Navbar