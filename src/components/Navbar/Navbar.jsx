import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

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

  return (
    // <>
      <Nav className={navbar ? 'active' : ''}>
        <NavbarContainer>
          {/* <NavLogo>
            <AiFillHeart/>
          </NavLogo> */}
          {/* <NavLogo to='/'>Lara e Caio</NavLogo> */}
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>

          <NavMenu>
            <NavItem><NavLinks to="home">Home</NavLinks></NavItem>
            <NavItem><NavLinks to="casal">Casal</NavLinks></NavItem>
            <NavItem><NavLinks to="historia">História</NavLinks></NavItem>
            <NavItem><NavLinks to="galeria">Galeria</NavLinks></NavItem>
            <NavItem><NavLinks to="presenca">Confirmações</NavLinks></NavItem>
            <NavItem><NavLinks to="presentes">Presentes</NavLinks></NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink to="/signin">Presença</NavBtnLink>
          </NavBtn> */}

        </NavbarContainer>
      </Nav>
    // </>
  )
}

export default Navbar