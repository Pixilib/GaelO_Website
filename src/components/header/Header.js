
import { useTranslation } from 'react-i18next'
import Lang from './Lang'
import { Col, Row, Figure, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import logoPrincipal from '../../assets/images/logoPrincipal.png'
import React, { useState } from 'react'
import logoGitHub from '../../assets/images/github.svg'
import { useNavigate, useLocation, useMatch, Link, Route, Routes, BrowserRouter, } from 'react-router-dom'

import Welcome from './Welcome.js'
import Role from '../solution/Role'
import OurViewRoot from '../ourviews/OurViewRoot'

function Header(props) {
  const [isScrolled, setScrolled] = useState(false)

  const history = useNavigate();

  const handleClick = () => {
    console.log(history)
    history("/ourviews");
  }


  const location = useLocation()

  React.useEffect(() => {
    // runs on location, i.e. route, change
    console.log('handle route change here', location)
  }, [location])


  const NavBarTransparentToWhite = (event) => {
    if (window.pageYOffset >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const customLink = isScrolled ? 'text-dark' : 'text-white'
  const customNav = isScrolled ? 'bg-white  py-0 ' : 'bg-transparent background py-0 '
  window.addEventListener('scroll', NavBarTransparentToWhite)
  const { t } = useTranslation()

  return (
    <div>

      <Navbar sticky='top' className={customNav}>
        <Col sm={1}>
          <Nav.Link href='#home'>
            <Figure.Image type='button' src={logoPrincipal} alt='Image logo Principal of Gaelo' />
          </Nav.Link>
        </Col>

        <Col>
          <Nav className='justify-content-center fw-bold'>
            <Link to="/ourviews" onClick={handleClick} >{t('navbar.1')}</Link>
          </Nav>

        </Col>
        <a href="https://github.com/Pixilib/"><img className='' src={logoGitHub} /></a>
        <Col sm={1}>
          <Lang />
        </Col>
      </Navbar>

      <Routes>

        <Route exact path="/ourviews" component={OurViewRoot} />

      </Routes>

    </div >
  )
}


export default Header


