
import { useTranslation } from 'react-i18next'
import Lang from './Lang'
import { Col, Container, Image, Nav, Navbar, } from 'react-bootstrap'
import { ReactComponent as LogoPrincipal } from '../../assets/images/gaelo-logo.svg'
import { Fragment, } from 'react'
import { ReactComponent as LogoGitHub } from '../../assets/images/github.svg'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Header = (props) => {

  const location = useLocation()

  const history = useNavigate();

  const handleClick = () => {
    history("/");
  }

  const customStyle = {
    marginLeft: "10px",
    textDecoration: "none"
  }

  const customLink = (origin) => {
    let className = props.scrolled ? 'text-dark' : 'text-white'

    if (origin === location.pathname) {
      className = "text-secondary"
    }

    return className;
  }

  const customNav = () => props.scrolled ? 'bg-white py-0 ' : 'bg-transparent background py-0 '

  const { t } = useTranslation()

  const styleLogoGH = () => {
    return {
      color: 'inherit',
      textdecoration: 'none',
    }
  }

  return (

    <Navbar sticky='top' expand="lg" className={customNav()}>
      <Container fluid className='d-flex justify-content-around'>
        <Col xs={1}>

          <Link to="/" onClick={handleClick}>
            <LogoPrincipal className='w-50' />
          </Link>
        </Col>
        <Col sm={10} className='fw-bold d-flex justify-content-center'>
          <Nav >
            <Navbar.Toggle aria-controls="basic-navbar-nav " className="border-0 shadow-none " />
            <Navbar.Collapse id="basic-navbar-nav" className=''>
              <Link to="ourviews" style={customStyle} className={customLink("/ourviews")} onClick={handleClick} >{t('navbar.1')}</Link>
              <Link to="solution" style={customStyle} className={customLink("/solution")} onClick={handleClick}>{t('navbar.2')} </Link>
              <Link to="service" style={customStyle} className={customLink("/service")} onClick={handleClick}>{t('navbar.3')} </Link>
              <Link to="expertise" style={customStyle} className={customLink("/expertise")} onClick={handleClick}>{t('navbar.4')} </Link>
              <Link hidden='true' to="team" style={customStyle} className={customLink("/team")} onClick={handleClick}>{t('navbar.5')} </Link>
              <Link to="contact" style={customStyle} className={customLink("/contact")} onClick={handleClick}>{t('navbar.6')} </Link>
            </Navbar.Collapse>
          </Nav>
        </Col>


          <Col >
    <Lang />
    </Col>
        
        <Col  className='d-flex justify-content-around align-items-center'>
          
          <a style={styleLogoGH()} target="_blank" rel="noopener noreferrer" href="https://github.com/Pixilib/">
            <LogoGitHub />
          </a>
        </Col>


      </Container>

    </Navbar>


  )
}
export default Header