
import { useTranslation } from 'react-i18next'
import Lang from './Lang'
import { Col, Row, Figure, Nav, Navbar } from 'react-bootstrap'
import logoPrincipal from '../../assets/images/logoPrincipal.png'
import { useState } from 'react'
import logoGitHub from '../../assets/images/github.svg'


function Header(props) {
  const [isScrolled, setScrolled] = useState(false)

  const NavBarTransparentToWhite = (event) => {
    if (window.pageYOffset >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const customLink = isScrolled ? 'text-dark' : 'text-white'
  const customNav = isScrolled ? 'bg-white py-0' : 'bg-transparent background py-0'
  window.addEventListener('scroll', NavBarTransparentToWhite)
  const { t } = useTranslation()

  return (

    <Navbar sticky='top' className={customNav}>
      <Col sm={1}>
        <Nav.Link href='#home'>
          <Figure.Image className="w-80 " type='button' src={logoPrincipal} alt='Image logo Principal of Gaelo' />
        </Nav.Link>
      </Col>
      <Col>
        <Nav className='justify-content-center fw-bold'>
          <Nav.Link className={customLink} href='#ourviews'>{t('navbar.1')}</Nav.Link>
          <Nav.Link className={customLink} href='#solution'>{t('navbar.2')}</Nav.Link>
          <Nav.Link className={customLink} href='#features'>{t('navbar.3')}</Nav.Link>
          <Nav.Link className={customLink} href='#video'>{t('navbar.4')}</Nav.Link>
          <Nav.Link className={customLink} href='#about'>{t('navbar.5')}</Nav.Link>
          <Nav.Link className={customLink} href='#contact'>{t('navbar.6')}</Nav.Link>
        </Nav>
      </Col>
      <a href="https://github.com/Pixilib/"><img className='' src={logoGitHub} /></a>
      <Col sm={1}>
        <Nav><Lang /></Nav>
      </Col>
    </Navbar>
  )
}


export default Header
